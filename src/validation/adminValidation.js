import * as yup from "yup";

export const createCategorySchema = yup.object({
    name: yup.string().trim().required("name is required")
});