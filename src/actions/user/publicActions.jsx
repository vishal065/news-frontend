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
const getLatestNews = async ({ category, subcategory, publisher, anchor }, pageParam = 1) => {
    try {
        const res = await AxiosHandler.get(`/u/get?category=${category}&subcategory=${subcategory}&publisher=${publisher}&anchor=${anchor}&page=${pageParam}&limit=5`);
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