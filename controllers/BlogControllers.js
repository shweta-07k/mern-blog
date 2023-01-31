const Blog = require("../models/Blogmodel")


exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error${error}`,
        })
    }
}
exports.AddBlogs = async (req, res) => {
    try {
        console.log(req.body);
        const result = await Blog.create(req.body)
        res.json({
            success: true,
            message: "Blog create successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error${error}`,
        })
    }
}

exports.RemoveBlogs = async (req, res) => {
    try {
        // console.log(req.body);\
        const { BlogId } = req.params
        const result = await Blog.findByIdAndDelete(BlogId)
        res.json({
            success: true,
            message: "Blog Remove successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error${error}`,
        })
    }
}
exports.editBlogs = async (req, res) => {
    try {
        // console.log(req.body);\
        const { BlogId } = req.params
        const result = await Blog.findByIdAndUpdate(BlogId, req.body)
        res.json({
            success: true,
            message: "Blog update successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error${error}`,
        })
    }
}