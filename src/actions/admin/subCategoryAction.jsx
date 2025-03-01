import AxiosHandler from "../AxiosHandler";


const axiosInstance = AxiosHandler();

// Create Sub Category 
const createSubCategory = async (data) => {
    try {
        const res = await axiosInstance.post("/subCategory/create", data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Fetched Sub Category 
const getSubCategory = async () => {
    try {
        const res = await axiosInstance.get("/subCategory/get-list");
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Update Sub Category 
const updateSubCategory = async (id, data) => {
    try {
        const res = await axiosInstance.put(`subCategory/update/${id}`, data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Delete Sub Category 
const deleteSubCategory = async (id) => {
    try {
        return await axiosInstance.delete(`subCategory/delete/${id}`);

    } catch (error) {
        console.log(error);
        return error;
    }
}

export { createSubCategory, getSubCategory, updateSubCategory, deleteSubCategory };