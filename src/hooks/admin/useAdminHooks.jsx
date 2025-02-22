import { createAnchor, deleteAnchor, updateAnchor } from "../../actions/admin/AnchorAction";
import { createCategory, deleteCategory, updateCategory } from "../../actions/admin/CategoryAction";
import { useMutationData } from "../useMutation";


// Create Category Custom Hook 
function useCreateAndUpdateCategory() {
    const { mutate, isPending } = useMutationData(["category-mutation"], (data) => {

        if (data.path === "create") return createCategory(data);

        else if (data.path === "update") return updateCategory(data?.id, { name: data?.name });

        else return deleteCategory(data?.id);

    }, ["category-query"]);

    return { mutate, isPending };
}


// Create Anchor Custom Hook  
function useCreateAndUpdateAnchor() {
    const { mutate, isPending } = useMutationData(["anchor-mutation"], (data) => {
        // for create 
        if (data.path === "create") return createAnchor(data);

        // for update 
        else if (data.path === "update") return updateAnchor(data?.id, { name: data?.name });

        // for delete 
        else return deleteAnchor(data?.id);

    }, ["anchor-query"]);
    return { mutate, isPending };
}


export { useCreateAndUpdateCategory, useCreateAndUpdateAnchor };