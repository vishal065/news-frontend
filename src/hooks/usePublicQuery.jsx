import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getLatestNews, getPublicCategory } from "../actions/user/publicActions";


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

            // console.log("currpage", currPage)
            // console.log("allpage", allPages)
            return currPage.length === 2 ? allPages.length + 1 : undefined
        }
    });
}

export { usePublicQueryCategory, useLatestQueryNews };