import axios from "axios"



const AxiosHandler = () => {

    function APICall() {
        return axios.create({
            baseURL: import.meta.env.VITE_APP_API_URL,
            withCredentials: true,
            // headers: { "Authorization": `Bearer ` }
        })
    }
    return APICall();
}
export default AxiosHandler;