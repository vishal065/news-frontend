import AxiosHandler from "../AxiosHandler";



// Create Sub Category 
const createSubCategory = async (data) => {
    try {
        const res = await AxiosHandler.post("/subCategory/create", data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Fetched Sub Category 
const getSubCategory = async () => {
    try {
        const res = await AxiosHandler.get("/subCategory/get-list");
        return res?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Update Sub Category 
const updateSubCategory = async (id, data) => {
    try {
        const res = await AxiosHandler.put(`/subCategory/update/${id}`, data);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Delete Sub Category 
const deleteSubCategory = async (id) => {
    try {
        const res = await AxiosHandler.delete(`subCategory/delete/${id}`);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

export { createSubCategory, getSubCategory, updateSubCategory, deleteSubCategory };