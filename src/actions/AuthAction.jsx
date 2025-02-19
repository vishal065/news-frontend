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

// Verify OTP 
const verifyOtp = async (data) => {
    try {
        const res = await axiosInstance.post("/auth/verify", data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}


// Login 
const login = async (data) => {
    try {
        const res = await axiosInstance.post("/auth/login", data);
        // console.log("Response", res?.data?.data)
        return res;
    } catch (error) {
        console.log(error);
    }
}


export { registerAdmin, verifyOtp, login };