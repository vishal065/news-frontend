import * as yup from "yup";


export const adminRegisterSchema = yup.object({
    name: yup.string().trim().required("name is required").min(2),
    email: yup.string().email().trim().required("email  is required"),
    code: yup.string().trim().required("code is required"),
    password: yup.string().trim().required("password is required"),
    confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], "Passwords must be match").required("Password is required")
});


export const verifyOTPSchema = yup.object({
    code: yup.number().required("OTP is required")
})