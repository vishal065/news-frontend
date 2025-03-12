import AxiosHandler from "../AxiosHandler";


// Create Publisher 
const createPublisher = async (data) => {
    try {
        const res = await AxiosHandler.post("/publisher/create", data);
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// fetched Publisher
const getPublisher = async () => {
    try {
        const res = await AxiosHandler.get("/publisher/get");
        return res?.data;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// update Publisher
const updatePublisher = async (id, data) => {
    try {
        const res = await AxiosHandler.put(`/publisher/update/${id}`, data);
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// delete Publisher 
const deletePublisher = async (id) => {
    try {
        const res = await AxiosHandler.delete(`publisher/delete/${id}`);
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}


export { createPublisher, getPublisher, updatePublisher, deletePublisher };