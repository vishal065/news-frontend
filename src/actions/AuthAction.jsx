import AxiosHandler from "./AxiosHandler"

// const axiosInstance = AxiosHandler();

// Regisetr Admin 
const registerAdmin = async (data, code) => {
    try {
        const res = await AxiosHandler.post(`/auth/admin/signup?verifycode=${code}`, data)
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Verify OTP 
const verifyOtp = async (data) => {
    try {
        const res = await AxiosHandler.post("/auth/verify", data);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}


// Login 
const login = async (data) => {
    try {
        const res = await AxiosHandler.post("/auth/login", data);
        return res;
    } catch (error) {
        console.log(error);
    }
}
const logout = async (data) => {
    try {
        const res = await AxiosHandler.post(`/auth/logout`)
        return res

    } catch (error) {
        console.log(error);

    }
}


export { registerAdmin, verifyOtp, login, logout };