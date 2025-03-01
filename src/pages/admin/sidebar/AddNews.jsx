import React, { useState } from "react";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createNewsTableSchema } from "../../../validation/adminValidation";
import { createNewsState } from "../../../validation/adminState";
import { useQueryAnchor, useQueryCategory, useQueryPublisher } from "../../../hooks/useAdminQuery";

const AddNews = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [videoPreview, setVideoPreview] = useState("");
    const { data: category } = useQueryCategory();
    const { data: anchor } = useQueryAnchor();
    const { data: publisher } = useQueryPublisher();
    console.log("Category data :", category);
    console.log("Anchor Data :", anchor);
    console.log("Publisher Data :", publisher);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldError } = useFormik({
        initialValues: createNewsState,
        validationSchema: createNewsTableSchema,
        validateOnChange: false, // Ensures validation errors appear immediately on submit
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit: (value) => {
            console.log("Form Submitted", value);
        },
    });

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            if (file.size > 500 * 1024) {
                setFieldError("image", "Image size should not exceed 500KB");
                setFieldValue("image", null);
                setPreviewImage(null);
            } else {
                setFieldValue("image", file);
                setPreviewImage(URL.createObjectURL(file));
            }
        }
    };

    const handleVideoChange = (event) => {
        const url = event.target.value;
        setFieldValue("videoURL", url);
        setVideoPreview(url);
    };

    const handleDeleteImage = () => {
        setPreviewImage(null);
        setFieldValue("image", null);
    };

    const handleDeleteVideo = () => {
        setVideoPreview("");
        setFieldValue("videoURL", "");
    };

    return (
        <div className="w-full mx-auto p-8 bg-white shadow-md rounded-lg overflow-y-auto" style={{ maxHeight: "100vh" }}>
            <h1 className="text-xl font-semibold mb-6">Create Content</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(values).map((field) => (
                    <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                        {field === "description" ? (
                            <div className="mt-1 w-full border rounded-md" style={{ height: "400px", overflowY: "auto" }}>
                                <ReactQuill
                                    value={values.description}
                                    onChange={(value) => setFieldValue("description", value)}
                                    style={{ height: "350px" }}
                                />
                            </div>
                        ) : field === "categoryId" || field === "subCategoryId" || field === "publisherId" || field === "anchorId" ? (
                            <select
                                name={field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[field]}
                                className="mt-1 p-2 w-full border rounded-md"
                            >
                                {
                                    field === "categoryId" && category?.map((item, i) => (<option key={i} value="">{item?.name}</option>))
                                }
                                {
                                    field === "subCategoryId" && category?.map((item, i) => (<option key={i} value="">{item?.name}</option>))
                                }
                                {
                                    field === "publisherId" && publisher?.data?.map((item, i) => (<option key={i} value="">{item?.name}</option>))
                                }
                                {
                                    field === "anchorId" && anchor?.data?.map((item, i) => (<option key={i} value="">{item?.name}</option>))
                                }
                            </select>
                        ) : field === "image" ? (
                            <>
                                <input
                                    type="file"
                                    name={field}
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                                {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                                {previewImage && (
                                    <div className="mt-2">
                                        <img src={previewImage} alt="Preview" className="w-full h-40 object-cover rounded-md" />
                                        <button
                                            type="button"
                                            onClick={handleDeleteImage}
                                            className="mt-2 p-2 bg-red-500 text-white rounded-md"
                                        >
                                            Delete Image
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : field === "videoURL" ? (
                            <>
                                <input
                                    type="url"
                                    name={field}
                                    onChange={handleVideoChange}
                                    onBlur={handleBlur}
                                    value={values[field]}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                                {touched.videoURL && errors.videoURL && (
                                    <p className="text-red-500 text-xs mt-1">{errors.videoURL}</p>
                                )}
                                {videoPreview && (
                                    <div className="mt-2">
                                        <iframe
                                            src={videoPreview}
                                            title="Video Preview"
                                            className="w-full h-40"
                                            allowFullScreen
                                        ></iframe>
                                        <button
                                            type="button"
                                            onClick={handleDeleteVideo}
                                            className="mt-2 p-2 bg-red-500 text-white rounded-md"
                                        >
                                            Delete Video
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <input
                                type="text"
                                name={field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[field]}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        )}
                        {touched[field] && errors[field] && (
                            <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                        )}
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white cursor-pointer duration-300 p-2 rounded-md hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddNews;
