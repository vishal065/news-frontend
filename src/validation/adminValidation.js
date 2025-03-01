import * as yup from "yup";


// Category 
export const createCategorySchema = yup.object({
    name: yup.string().trim().required("name is required")
});

// Sub Category
export const createSubCategorySchema = yup.object({
    name: yup.string().trim().required("name is required"),
    categoryId: yup.string().trim().required("categoryId is required")
});


//  Anchor 
export const createAnchorSchema = yup.object({
    name: yup.string().trim().required("name is required")
});


//  Publisher
export const createPublisherSchema = yup.object({
    name: yup.string().trim().required("name is required")
});


//  News
export const createNewsTableSchema = yup.object({
    title: yup.string().required("Title is required"),
    slug: yup.string().required("Slug is required"),
    description: yup.string().required("Description is required"),
    metaDescription: yup.string().required("Meta description is required"),
    alt: yup.string().required("Alt text is required"),
    type: yup.string().required("Type is required"),
    status: yup.string().required("Status is required"),
    videoURL: yup.string().url("Enter a valid URL"),
    categoryId: yup.string().required("Category is required"),
    subCategoryId: yup.string().required("Subcategory is required"),
    publisherId: yup.string().required("Publisher is required"),
    anchorId: yup.string().required("Anchor is required"),
}).test(
    "image-or-video-required",
    "Either an image or a video is required",
    function (value) {
        if (!value.image && !value.videosURL) {
            return this.createError({ path: "videosURL", message: "Either an image or a video is required" });
        }
        return true;
    }
);
