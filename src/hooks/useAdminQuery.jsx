import { useQuery } from "@tanstack/react-query"
import { getAdminCategory } from "../actions/admin/CategoryAction"
import { getAnchor } from "../actions/admin/AnchorAction";


// Query for Fetched Category 
const useQueryCategory = () => {
    return useQuery({ queryKey: ["category-query"], queryFn: () => getAdminCategory(), _optimisticResults: "optimistic", gcTime: 10000, staleTime: 10000 });
}

// Query for fetched for Anchor
const useQueryAnchor = () => {
    return useQuery({ queryKey: ["anchor-query"], queryFn: () => getAnchor(), _optimisticResults: "optimistic", gcTime: 20000, staleTime: 2000 });
}

export { useQueryCategory, useQueryAnchor };