import AxiosHandler from "./AxiosHandler"



const registerAdmin = async (data, code) => {
    try {
        const res = await AxiosHandler.post(`/auth/admin/signup?verifycode=${code}`, data)
        return res
    } catch (error) {
        console.log(error)
    }

}
export { registerAdmin };