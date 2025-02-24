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
    title: yup.string().trim().required("title is required"),
    slug: yup.string().trim().required("slug is required"),
    description: yup.string().trim().required("description is required"),
    metaDesciption: yup.string().trim().required("meta desciption is required"),
    alt: yup.string().trim().required("alt is required"),
    type: yup.string().trim().required("type is required"),
    status: yup.boolean().required("status is required"),
    videoURL: yup.string().trim().required("videoURL is required"),
    categoryId: yup.string().trim().required("categoryId is required"),
    subCategoryId: yup.string().trim().required("subCategoryId is required"),
    publisherId: yup.string().trim().required("publisherId is required"),
    anchorId: yup.string().trim().required("anchorId is required")
});
