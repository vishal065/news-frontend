import AxiosHandler from "../AxiosHandler";


// create news 

const createNews = async (data) => {
    try {


        const res = await AxiosHandler.post("/news/create", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// Fetched News 
const getNews = async (page) => {
    try {
        const res = await AxiosHandler.get(`/news/get?page=${page}&limit=${6}`)
        return res?.data?.data
    } catch (error) {
        console.error(error);
        return error;
    }
}


// Fetched News by ID
const getNewsByID = async (id) => {
    try {
        const res = await AxiosHandler.get(`/news/get/${id}`)
        return res?.data?.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

// Update News 
const updateNews = async (id, data) => {
    try {


        const res = await AxiosHandler.put(`news/update/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });




        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// Delete News 
const deleteNews = async (id) => {
    try {
        const res = await AxiosHandler.delete(`/news/delete/${id}`)
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}


export { createNews, getNews, updateNews, deleteNews, getNewsByID };