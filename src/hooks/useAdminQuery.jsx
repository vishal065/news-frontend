import { useQuery } from "@tanstack/react-query"
import { getAdminCategory } from "../actions/admin/CategoryAction"


// Query for Fetched Category 
const useQueryCategory = () => {
    return useQuery({ queryKey: ["category-query"], queryFn: () => getAdminCategory(), _optimisticResults: "optimistic", gcTime: 10000, staleTime: 10000 });
}

export { useQueryCategory };