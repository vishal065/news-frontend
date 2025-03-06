import { useQuery } from "@tanstack/react-query"
import { getAdminCategory } from "../actions/admin/CategoryAction"
import { getAnchor } from "../actions/admin/AnchorAction";
import { getPublisher } from "../actions/admin/PublisherAction";
import { getNews, getNewsByID } from "../actions/admin/NewsAction.jsx";
import { getSubCategory } from "../actions/admin/subCategoryAction";


// Query for Fetched Category 
const useQueryCategory = () => {
    return useQuery({ queryKey: ["category-query"], queryFn: () => getAdminCategory(), _optimisticResults: "optimistic", gcTime: 10000, staleTime: 10000 });
};

// Query for Sub Category 
const useQuerySubCategory = () => {
    return useQuery({ queryKey: ["sub-category-query"], queryFn: () => getSubCategory(), _optimisticResults: "optimistic", gcTime: 20000, staleTime: 20000 });
};
// Query for fetched for Anchor
const useQueryAnchor = () => {
    return useQuery({ queryKey: ["anchor-query"], queryFn: () => getAnchor(), _optimisticResults: "optimistic", gcTime: 20000, staleTime: 20000 });
};

// Query for fetched Publisher
const useQueryPublisher = () => {
    return useQuery({ queryKey: ["publisher-query"], queryFn: () => getPublisher(), _optimisticResults: "optimistic", gcTime: 20000, staleTime: 20000 })
};

// Query for fetched News
const useQueryNews = () => {
    return useQuery({ queryKey: ["news-query"], queryFn: () => getNews(), gcTime: 20000, staleTime: 20000 });
};

const useQueryNewsByID = (id) => {

    return useQuery({
        queryKey: ["newsByID-query", id],
        queryFn: () => getNewsByID(id),
        enabled: !!id,
        gcTime: 20000,
        staleTime: 20000
    });

};



export { useQueryCategory, useQueryAnchor, useQueryPublisher, useQueryNews, useQuerySubCategory, useQueryNewsByID };