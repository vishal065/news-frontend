import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const validationSchema = yup.object({
    title: yup.string().required("Title is required"),
    slug: yup.string().required("Slug is required"),
    description: yup.string().required("Description is required"),
    metaDescription: yup.string().required("Meta description is required"),
    alt: yup.string().required("Alt text is required"),
    type: yup.string().required("Type is required"),
    status: yup.string().required("Status is required"),
    images: yup.mixed(),
    videosURL: yup.string().url("Enter a valid URL"),
    categoryId: yup.string().required("Category is required"),
    subCategoryId: yup.string().required("Subcategory is required"),
    publisherId: yup.string().required("Publisher is required"),
    anchorId: yup.string().required("Anchor is required"),
}).test("images-or-videos", "Either an image or a video URL is required, but not both", function (values) {
    if (!values.images && !values.videosURL) {
        return this.createError({ path: "videosURL", message: "Either an image or a video URL is required" });
    }
    if (values.images && values.videosURL) {
        return this.createError({ path: "videosURL", message: "Only one of image or video URL should be provided" });
    }
    return true;
});

const AddNews = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [videoPreview, setVideoPreview] = useState("");
    const [imageError, setImageError] = useState("");

    const formik = useFormik({
        initialValues: {
            title: "",
            slug: "",
            description: "",
            metaDescription: "",
            alt: "",
            type: "",
            status: "",
            images: null,
            videosURL: "",
            categoryId: "",
            subCategoryId: "",
            publisherId: "",
            anchorId: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form Submitted", values);
        },
    });

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            if (file.size > 500 * 1024) {
                setImageError("Image size should not be more than 500KB");
                formik.setFieldValue("images", null);
                setPreviewImage(null);
            } else {
                setImageError("");
                formik.setFieldValue("images", file);
                setPreviewImage(URL.createObjectURL(file));
            }
        }
    };

    const handleVideoChange = (event) => {
        formik.handleChange(event);
        setVideoPreview(event.target.value);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg overflow-y-auto" style={{ maxHeight: "100vh" }}>
            <h2 className="text-xl font-semibold mb-4">Create Content</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {Object.keys(formik.initialValues).map((field) => (
                    <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 capitalize">
                            {field}
                        </label>
                        {field === "description" ? (
                            <div className="mt-1 w-full border rounded-md" style={{ height: "400px", overflowY: "auto" }}>
                                <ReactQuill
                                    value={formik.values.description}
                                    onChange={(value) => formik.setFieldValue("description", value)}
                                    style={{ height: "350px" }}
                                />
                            </div>
                        ) : field === "categoryId" || field === "subCategoryId" || field === "publisherId" || field === "anchorId" ? (
                            <select
                                name={field}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[field]}
                                className="mt-1 p-2 w-full border rounded-md"
                            >
                                <option value="">Select {field}</option>
                            </select>
                        ) : field === "images" ? (
                            <>
                                <input
                                    type="file"
                                    name={field}
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                                {imageError && <p className="text-red-500 text-xs mt-1">{imageError}</p>}
                                {previewImage && <img src={previewImage} alt="Preview" className="mt-2 w-full h-40 object-cover rounded-md" />}
                            </>
                        ) : field === "videosURL" ? (
                            <>
                                <input
                                    type="url"
                                    name={field}
                                    onChange={handleVideoChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values[field]}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                                {videoPreview && (
                                    <iframe
                                        src={videoPreview}
                                        title="Video Preview"
                                        className="mt-2 w-full h-40"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </>
                        ) : (
                            <input
                                type="text"
                                name={field}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[field]}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        )}
                        {formik.touched[field] && formik.errors[field] && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors[field]}</p>
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddNews;
