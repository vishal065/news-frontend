import { createCategory } from "../../actions/admin/CategoryAction";
import { useMutationData } from "../useMutation";


// Create Category 
function useCreateCategory() {
    const { mutate, isPending } = useMutationData(["create-category"], (data) => createCategory(data), ["create-category-queryKey"]);
    return { mutate, isPending };
}

export { useCreateCategory };