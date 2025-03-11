import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getLatestNews, getNewsBySlug, getPublicCategory, getRelatedNews } from "../actions/user/publicActions";


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
const useLatestQueryNews = (state) => {
    return useInfiniteQuery({
        queryKey: ["latest-news", state],
        queryFn: ({ queryKey, pageParam = 1 }) => {
            // const [, category, subcategory, publisher, anchor] = queryKey;
            return getLatestNews(queryKey, pageParam);
        },
        getNextPageParam: (currPage, allPages) => {
            return currPage.length === 6 ? allPages[0].length + 1 : undefined;
        },
    });
};


// news by slug
const useNewsBySlug = (slug) => {
    return useQuery({
        queryKey: ["news-by-slug", slug],
        queryFn: () => getNewsBySlug(slug),
        _optimisticResults: "optimistic",
        enabled: !!slug,
        gcTime: 20000,
        staleTime: 20000
    });
}

// Releted News 
const useRelatedNews = (category) => {
    return useQuery({
        queryKey: ["related-news", category],
        queryFn: () => getRelatedNews(category),
        _optimisticResults: "optimistic",
        enabled: !!category,
        gcTime: 2000,
        staleTime: 2000
    })
}


export { usePublicQueryCategory, useLatestQueryNews, useNewsBySlug, useRelatedNews };