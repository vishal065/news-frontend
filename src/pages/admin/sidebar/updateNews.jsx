import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createNewsState } from "../../../validation/adminState";
import { createNewsTableSchema } from "../../../validation/adminValidation"
import { useQueryAnchor, useQueryCategory, useQueryPublisher, useQuerySubCategory } from "../../../hooks/useAdminQuery";
import { Switch } from "@headlessui/react";
import { X } from "lucide-react";
import { useCreateAndUpdateNews } from "../../../hooks/admin/useAdminHooks";
import { useLocation } from "react-router-dom";
import { useRef } from "react";


const UpdateNews = () => {
    const quillRef = useRef(null);
    const { pathname, state } = useLocation()
    const { data: category } = useQueryCategory();
    const { data: anchor } = useQueryAnchor();
    const { data: publisher } = useQueryPublisher();
    const { data: subCategory } = useQuerySubCategory();
    const [previewImage, setPreviewImage] = useState(null);
    const [videoPreview, setVideoPreview] = useState("");
    const [slug, setSlug] = useState("");
    const [tagsValues, setTagsValues] = useState([]);
    const [tagsInput, setTagsInput] = useState("");
    const { mutate, isPending } = useCreateAndUpdateNews();





    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldError, resetForm } = useFormik({
        initialValues: state ?? createNewsState,
        validationSchema: createNewsTableSchema,
        validateOnChange: true,
        // validateOnBlur: true,
        enableReinitialize: true,
        onSubmit: (value) => {

            if (pathname.includes("/news/update")) {


                const formData = new FormData()
                Object.keys(createNewsState).map((item) => formData.append(item, value[item])
                )



                mutate({ path: pathname, formData, id: state?._id });


            }
            resetForm();
            setSlug("");
            setTagsValues([]);
            handleDeleteImage();
            handleDeleteVideo();
        },
    });


    const MyHandleSubmit = (e) => {
        e.preventDefault();
        if (values.slug.trim() === "") {
            setFieldError("slug", "slug is required")
        }
        setFieldValue("slug", slug)
        setFieldValue("tags", tagsValues)
        handleSubmit(e);
    }

    const handleSlugChange = useCallback((e) => {
        const formattedSlug = e.target.value.replace(/\s+/g, "-");
        setSlug(formattedSlug);
        setFieldValue("slug", formattedSlug);
    }, [setFieldValue]);

    const handleAddType = useCallback(() => {
        const trimmed = tagsInput.trim();
        if (trimmed && !tagsValues.includes(trimmed)) {
            setTagsValues(prev => [...prev, trimmed]);
            setTagsInput("");
        }
        setFieldValue("tags", tagsValues);
    }, [tagsInput, tagsValues]);

    const handleRemoveType = useCallback((index) => {
        setTagsValues(prev => prev.filter((_, i) => i !== index));
    }, []);

    //Handle Image
    const handleImageChange = useCallback((event) => {
        setPreviewImage(null)
        setFieldValue("image", null);
        setFieldError("image", null);
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
    }, [setFieldError, setFieldValue]);

    // Handle Video 
    const handleVideoChange = useCallback((event) => {
        const url = event.target.value;
        setFieldValue("videoURL", url);
        setVideoPreview(url);
    }, [setFieldValue]);

    // Delete Image 
    const handleDeleteImage = useCallback(() => {
        setPreviewImage(null);
        setFieldValue("image", null);
    }, [setFieldValue]);

    //Delete Video
    const handleDeleteVideo = useCallback(() => {
        setVideoPreview("");
        setFieldValue("videoURL", "");
    }, [setFieldValue]);

    useEffect(() => {

        state?.tags?.[0]?.split(",").forEach((item) => setTagsValues(prev => [...prev, item]));
        setSlug(state?.slug)
        setPreviewImage(state?.Image?.ImageURL)

    }, [state])






    if (!state) {
        return <div>loading...</div>
    }




    return (
        <div className="w-full mx-auto p-8 bg-white shadow-md rounded-lg overflow-y-auto" style={{ maxHeight: "100vh" }}>
            <h1 className="text-xl font-semibold mb-6">Update News</h1>
            <form onSubmit={MyHandleSubmit} className="space-y-4">
                {/* Title Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {touched.title && errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                </div>

                {/* Slug Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={slug}
                        onChange={handleSlugChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {touched?.slug && errors?.slug && <p className="text-red-500 text-xs mt-1">{errors?.slug}</p>}
                </div>

                {/* Meta Description Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Meta Description</label>
                    <textarea
                        name="metaDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.metaDescription}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {touched.metaDescription && errors.metaDescription && (
                        <p className="text-red-500 text-xs mt-1">{errors.metaDescription}</p>
                    )}
                </div>

                {/* Description Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <div className="mt-1 w-full border rounded-md" style={{ height: "400px", overflowY: "auto" }}>
                        <ReactQuill
                            ref={quillRef}
                            value={values.description}
                            onChange={(value) => setFieldValue("description", value)}
                            style={{ height: "350px" }}
                        />
                    </div>
                    {touched?.description && errors?.description && (
                        <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                    )}
                </div>
                {/* Type Field - Multiple Values */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={tagsInput}
                            onChange={(e) => setTagsInput(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        <button
                            type="button"
                            onClick={handleAddType}
                            className="bg-blue-500 text-white px-3 py-2 rounded-md"
                        >
                            Add
                        </button>
                    </div>
                    {/* Display added types */}
                    <div className="flex flex-wrap mt-2 gap-2">
                        {tagsValues.map((type, index) => (
                            <div key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
                                <span className="mr-2">{type}</span>
                                <button type="button" onClick={() => handleRemoveType(index)}>
                                    <X className="w-4 h-4 text-gray-600 hover:text-red-500" />
                                </button>
                            </div>
                        ))}
                    </div>
                    {touched.tags && errors.tags && (
                        <p className="text-red-500 text-xs mt-1">{errors.tags}</p>
                    )}
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        name="categoryId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.categoryId}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value=""> Select category</option>
                        {category && category?.map((item, i) => (
                            <option key={i} value={item?._id}>{item?.name}</option>
                        ))}
                    </select>
                    {touched?.categoryId && errors?.categoryId && (
                        <p className="text-red-500 text-xs mt-1">{errors.categoryId}</p>
                    )}
                </div>

                {/* SubCategory Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">SubCategory</label>
                    <select
                        name="subCategoryId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subCategoryId}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value=""> Select subCategory</option>
                        {values.categoryId && subCategory?.data?.filter((item) => item?.categoryId === values.categoryId)?.map((item, i) => (
                            <option key={i} value={item?._id}>{item?.name}</option>
                        ))}
                    </select>
                    {touched?.subCategoryId && errors?.subCategoryId && (
                        <p className="text-red-500 text-xs mt-1">{errors.subCategoryId}</p>
                    )}
                </div>

                {/* Publisher Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Publisher</label>
                    <select
                        name="publisherId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.publisherId}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value=""> Select publisher</option>
                        {publisher?.data?.map((item, i) => (
                            <option key={i} value={item?._id}>{item?.name}</option>
                        ))}
                    </select>
                    {touched?.publisherId && errors?.publisherId && (
                        <p className="text-red-500 text-xs mt-1">{errors.publisherId}</p>
                    )}
                </div>

                {/* Anchor Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Anchor</label>
                    <select
                        name="anchorId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.anchorId}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value=""> Select anchor</option>
                        {anchor?.data?.map((item, i) => (
                            <option key={i} value={item?._id}>{item?.name}</option>
                        ))}
                    </select>
                    {touched?.anchorId && errors?.anchorId && (
                        <p className="text-red-500 text-xs mt-1">{errors.anchorId}</p>
                    )}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {errors?.image && touched?.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
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
                </div>

                {/* Alt Text Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Alt Text</label>
                    <input
                        type="text"
                        name="alt"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.alt}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {touched?.alt && errors?.alt && <p className="text-red-500 text-xs mt-1">{errors.alt}</p>}
                </div>

                {/* Video URL Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Video URL</label>
                    <input
                        type="url"
                        name="videoURL"
                        onChange={handleVideoChange}
                        onBlur={handleBlur}
                        value={values?.videoURL}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                    {touched.videoURL && errors.videoURL && <p className="text-red-500 text-xs mt-1">{errors.videoURL}</p>}
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
                </div>

                {/* Status Toggle Button */}
                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <Switch
                        checked={values.status}
                        onChange={(value) => setFieldValue("status", value)}
                        className={`${values.status ? "bg-blue-500" : "bg-gray-300"} relative inline-flex items-center h-6 rounded-full w-11 transition`}
                    >
                        <span className="sr-only">Toggle Status</span>
                        <span
                            className={`${values.status ? "translate-x-6" : "translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full transition`}
                        />
                    </Switch>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white cursor-pointer duration-300 p-2 rounded-md hover:bg-blue-600">
                    Submit
                </button>
            </form >
        </div >

    );
};

export default UpdateNews;
