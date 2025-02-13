import axios from "axios"



const AxiosHandler = () => {
    function APICall() {
        return axios.create({
            baseURL: `${import.meta.VITE_APP_API_URL}/api/v1`,
            withCredentials: true,
            headers: { "Authorization": `Bearer ${userData?.token}` }
        })
    }
    return APICall();
}
export default AxiosHandler;