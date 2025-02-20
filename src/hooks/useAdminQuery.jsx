import { useQuery } from "@tanstack/react-query"
import { getAdminCategory } from "../actions/admin/CategoryAction"


const useQueryCategory = () => {
    return useQuery({ queryKey: ["create-category-queryKey"], queryFn: () => getAdminCategory() });
}

export { useQueryCategory };