import AxiosHandler from "../AxiosHandler";




// create Admin Category 
const createCategory = async (data) => {
    try {
        return await AxiosHandler.post("/category/create", data);

    } catch (error) {
        console.log(error);
        return error;
    }
}

// get Admin Category 
const getAdminCategory = async () => {
    try {
        const res = await AxiosHandler.get("/category/get");
        return res?.data?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Update Category 
const updateCategory = async (id, data) => {
    try {
        const res = await AxiosHandler.put(`/category/update/${id}`, data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Delete Category 
const deleteCategory = async (id) => {
    try {
        return await AxiosHandler.delete(`/category/delete/${id}`);

    } catch (error) {
        console.log(error);
        return error;
    }
}

export { createCategory, getAdminCategory, updateCategory, deleteCategory };