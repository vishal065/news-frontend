import { createCategory, deleteCategory, updateCategory } from "../../actions/admin/CategoryAction";
import { useMutationData } from "../useMutation";


// Create Category 
function useCreateAndUpdateCategory() {
    const { mutate, isPending } = useMutationData(["category-mutation"], (data) => {

        if (data.path === "create") {
            return createCategory(data)
        }
        else if (data.path === "update") {
            return updateCategory(data?.id, { name: data?.name })
        }
         else {
            return deleteCategory(data?.id);
        }

    }, ["category-query"]);
    return { mutate, isPending };
}

export { useCreateAndUpdateCategory };