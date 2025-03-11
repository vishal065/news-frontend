import { data } from "react-router-dom";
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
const getLatestNews = async ({ category, subcategory, publisher, anchor }, pageParam) => {
    try {


        const res = await AxiosHandler.get(`/u/get?category=${category}&subcategory=${subcategory}&publisher=${publisher}&anchor=${anchor}&page=${pageParam}&limit=${6}`);
        // console.log(res);


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

// Related news 
const getRelatedNews = async (category) => {
    try {
        const res = await AxiosHandler.get(`u/related-news?category=${category}`);
        // console.log("related news by action", res?.data?.data);
        return res?.data?.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}



export { getPublicCategory, getLatestNews, getNewsBySlug, getRelatedNews };