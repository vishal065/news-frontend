import * as yup from "yup";


export const contactSchema = yup.object({
    fullName: yup.string().trim().min(2).required("fullName is required"),
    email: yup.string().email().trim().required("email is required"),
    phone: yup.number().min(10).required("phone is required"),
    message: yup.string().min(3).required("message is required")
})