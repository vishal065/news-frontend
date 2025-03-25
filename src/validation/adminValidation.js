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




const FILE_SIZE = 500 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const imageValidationSchema = yup.object().shape({
    image: yup.mixed()
        .required("image is required")
        .test(
            "fileSize",
            "Image size should not exceed 500KB",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "fileFormat",
            "Unsupported file format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        ),
});




//  News
export const createNewsTableSchema = yup.object({
    title: yup.string().min(10).max(100).required("Title is required"),
    slug: yup.string().min(5).required("Slug is required"),
    description: yup.string().min(200).required("Description is required"),
    metaDescription: yup.string().min(10).max(200).required("Meta description is required"),
    alt: yup.string().min(3).max(50).required("Alt text is required"),
    tags: yup.array()
        .of(yup.string())
        .min(0, "At least 1 Tag is required").max(3, "max 3 tags allowed"),
    image: yup.mixed().required("Image is required").optional(),
    status: yup.string().required("Status is required"),
    videoURL: yup.string().url("Enter a valid URL"),
    categoryId: yup.string().required("Category is required"),
    subCategoryId: yup.string().nullable().optional(),
    publisherId: yup.string().required("Publisher is required"),
    anchorId: yup.string().nullable().optional(),
}).test(
    "image-or-video-required",
    "Either an image or a video is required",
    function (value) {
        if (!value.image && !value.videoURL) {
            return this.createError({ path: "videosURL", message: "Either an image or a video is required" });
        }
        return true;
    }
);
