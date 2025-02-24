import AxiosHandler from "../AxiosHandler";


const axiosInstance = AxiosHandler();

// create news 

const createNews = async (data) => {
    try {
        const res = await axiosInstance.post("/news/create", data)
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Fetched News 
const getNews = async () => {
    try {
        const res = await axiosInstance.get("/news/get")
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Update News 
const updateNews = async (data, id) => {
    try {
        const res = await axiosInstance.put(`news/update/${id}`, data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Delete News 
const deleteNews = async (id) => {
    try {
        const res = await axiosInstance.delete(`/news/delete/${id}`)
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}


export { createNews, getNews, updateNews, deleteNews };