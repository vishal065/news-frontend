import AxiosHandler from "../AxiosHandler";




// Create Admin Anchor 
const createAnchor = async (data) => {
    try {
        const res = await AxiosHandler.post("/anchor/create", data);
        return res;
    } catch (error) {
        console.error(error);
        return
    }
}

// fetch Anchors
const getAnchor = async () => {
    try {
        const res = await AxiosHandler.get("/anchor/get");
        return res?.data;

    } catch (error) {
        console.error(error);
        return error;
    }
}

//update Anchors
const updateAnchor = async (id, data) => {
    try {
        const res = await AxiosHandler.put(`/anchor/update/${id}`, data);
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// delete Anchors 
const deleteAnchor = async (id) => {
    try {
        const res = await AxiosHandler.delete(`anchor/delete/${id}`);
        return res;

    } catch (error) {
        console.error(error);
        return error;
    }
}


export { createAnchor, getAnchor, updateAnchor, deleteAnchor };