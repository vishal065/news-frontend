import { data } from "react-router-dom";
import AxiosHandler from "../AxiosHandler";

const axiosInstance = AxiosHandler();

// create Admin Category 
const createCategory = async (data) => {
    try {
        return await axiosInstance.post("/category/create", data);

    } catch (error) {
        console.log(error);
        return error;
    }
}

// get Admin Category 
const getAdminCategory = async () => {
    try {
        const res = await axiosInstance.get("/category/get");
        return res?.data?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Update Category 
const updateCategory = async (id, data) => {
    try {
        const res = await axiosInstance.put(`/category/update/${id}`, data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Delete Category 
const deleteCategory = async (id) => {
    try {
        return await axiosInstance.delete(`/category/delete/${id}`);

    } catch (error) {
        console.log(error);
        return error;
    }
}

export { createCategory, getAdminCategory, updateCategory, deleteCategory };