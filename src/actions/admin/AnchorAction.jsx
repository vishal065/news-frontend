import AxiosHandler from "../AxiosHandler";


const axiosInstance = AxiosHandler();

// Create Admin Anchor 
const createAnchor = async (data) => {
    try {
        const res = await axiosInstance.post("/anchor/create", data);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return
    }
}

// fetch Anchors
const getAnchor = async () => {
    try {
        const res = await axiosInstance.get("/anchor/get");
        return res?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

//update Anchors
const updateAnchor = async (id, data) => {
    try {
        const res = await axiosInstance.put(`/anchor/update/${id}`, data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// delete Anchors 
const deleteAnchor = async (id) => {
    try {
        return await axiosInstance.delete(`anchor/delete/${id}`);


    } catch (error) {
        console.log(error);
        return error;
    }
}


export { createAnchor, getAnchor, updateAnchor, deleteAnchor };