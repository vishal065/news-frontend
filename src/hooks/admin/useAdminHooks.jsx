import { createAnchor, deleteAnchor, updateAnchor } from "../../actions/admin/AnchorAction";
import { createCategory, deleteCategory, updateCategory } from "../../actions/admin/CategoryAction";
import { createNews, deleteNews, updateNews } from "../../actions/admin/NewsAction.jsx";
import { createPublisher, deletePublisher, updatePublisher } from "../../actions/admin/PublisherAction";
import { createSubCategory, deleteSubCategory, updateSubCategory } from "../../actions/admin/subCategoryAction";
import { useMutationData } from "../useMutation";


// Create Category Custom Hook 
function useCreateAndUpdateCategory() {
    const { mutate, isPending } = useMutationData(["category-mutation"], (data) => {

        if (data.path === "create") return createCategory(data);

        else if (data.path === "update") return updateCategory(data?.id, { name: data?.name });

        else return deleteCategory(data?.id);

    }, ["category-query", "sub-category-query"]);

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


// Create Publisher Custom hook 
function useCreateAndUpdatePublisher() {
    const { mutate, isPending } = useMutationData(["publisher-mutation"], (data) => {

        if (data.path === "create") return createPublisher(data);

        else if (data.path === "update") return updatePublisher(data?.id, { name: data?.name });

        else return deletePublisher(data?.id);

    }, ["publisher-query"]);
    return { mutate, isPending };
}

//Create Sub Category 
function useCreateAndUpdateSubCategory() {
    const { mutate, isPending } = useMutationData(["sub-category-mutation"], (data) => {

        if (data.path === "create") {

            return createSubCategory(data);
        }

        else if (data.path === "update") {


            return updateSubCategory(data?.id, { name: data?.name, categoryId: data?.categoryId });
        }

        else return deleteSubCategory(data?.id);
    }, ["sub-category-query"]);

    return { mutate, isPending };

}


// Create News 
function useCreateAndUpdateNews() {
    const { mutate, isPending } = useMutationData(["news-mutation"], ({ id, formData, path }) => {


        if (path === "/news/add") return createNews(formData);

        else if (path.includes("/news/update/")) {

            return updateNews(id, formData);
        }
        else if (path === "/news/delete") return deleteNews(id)

    }, ["news-query"]);

    return { mutate, isPending };
}


export { useCreateAndUpdateCategory, useCreateAndUpdateAnchor, useCreateAndUpdatePublisher, useCreateAndUpdateSubCategory, useCreateAndUpdateNews };