import AxiosHandler from "../AxiosHandler";


// Get Public category 
const getPublicCategory = async () => {
    try {
        const res = await AxiosHandler.get("/u/category-list");
        return res?.data?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}

// Latest News
const getLatestNews = async ({ pageParam = 1 }) => {
    try {
        const res = await AxiosHandler.get(`/u/get?page=${pageParam}&limit=${2}`);
        return res?.data?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}


// Get news by slug
const getNewsBySlug = async (slug) => {

    try {
        const res = await AxiosHandler.get(`/u/news/${slug}`);
        return res?.data?.data[0];

    } catch (error) {
        console.log(error);
        return error;
    }
}




export { getPublicCategory, getLatestNews, getNewsBySlug };