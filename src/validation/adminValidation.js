import * as yup from "yup";


// Create CAtegory 
export const createCategorySchema = yup.object({
    name: yup.string().trim().required("name is required")
});


// Create Anchor 
export const createAnchorSchema = yup.object({
    name: yup.string().trim().required("name is required")
})