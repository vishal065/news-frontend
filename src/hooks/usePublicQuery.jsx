import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getLatestNews, getNewsBySlug, getPublicCategory } from "../actions/user/publicActions";


// Category fetched 
const usePublicQueryCategory = () => {
    return useQuery({
        queryKey: ["public-category-list"],
        queryFn: () => getPublicCategory(),
        _optimisticResults: "optimistic",
        gcTime: 20000,
        staleTime: 20000
    });
}

// Latest News
const useLatestQueryNews = () => {
    return useInfiniteQuery({
        queryKey: ["latest-news"],
        queryFn: getLatestNews,
        getNextPageParam: (currPage, allPages) => {
            return currPage.length === 2 ? allPages.length + 1 : undefined
        }
    });
}

// news by slug
const useNewsBySlug = (slug) => {
    return useQuery({
        queryKey: ["news-by-slug", slug],
        queryFn: () => getNewsBySlug(slug),
        _optimisticResults: "optimistic",
        enabled: !!slug,
        gcTime: 20000,
        staleTime: 20000
    })
}

export { usePublicQueryCategory, useLatestQueryNews, useNewsBySlug };