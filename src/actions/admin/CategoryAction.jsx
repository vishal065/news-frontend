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

export { createCategory, getAdminCategory };