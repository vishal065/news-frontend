import AxiosHandler from "./AxiosHandler"


const axiosInstance = AxiosHandler();

// Regisetr Admin 
const registerAdmin = async (data, code) => {

    try {
        const res = await axiosInstance.post(`/auth/admin/signup?verifycode=${code}`, data)
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const verifyOtp = async (data) => {
    try {
        const res = await axiosInstance.post("/auth/verify", data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}


export { registerAdmin, verifyOtp };