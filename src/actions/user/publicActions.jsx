import AxiosHandler from "../AxiosHandler";


// Get Public category 
const getPublicCategory = async () => {
    try {
        const res = await AxiosHandler.get("/u/category-list");
        return res?.data?.data;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// Latest News
const getLatestNews = async (category = null, subcategory = null, publisher = null, anchor = null, pageParam = 1) => {
    try {

        const res = await AxiosHandler.get(`/u/get?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}&publisher=${encodeURIComponent(publisher)}&anchor=${encodeURIComponent(anchor)}&page=${pageParam}&limit=${6}`);

        return res?.data?.data;

    } catch (error) {
        console.error(error);
        return error;
    }
}

// Get news by slug
const getNewsBySlug = async (slug) => {

    try {
        const res = await AxiosHandler.get(`/u/news/${slug}`);
        return res?.data?.data[0];

    } catch (error) {
        console.error(error);
        return error;
    }
}

// Related news 
const getRelatedNews = async (category = null) => {
    try {
        const res = await AxiosHandler.get(`/u/related-news?category=${encodeURIComponent(category)}`);
        return res?.data?.data;

    } catch (error) {
        console.error(error);
        return error;
    }
}

//Create Contact
const createContact = async (data) => {
    try {
        const res = await AxiosHandler("/contact/create", data);
        console.log(res);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    }
}



export { getPublicCategory, getLatestNews, getNewsBySlug, getRelatedNews, createContact };