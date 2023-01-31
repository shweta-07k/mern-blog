const { getAllBlogs, AddBlogs, RemoveBlogs, editBlogs } = require("../controllers/BlogControllers")

const router = require("express").Router()

//GET http://localhost:5000/blogs/
//POST http://localhost:5000/blogs/add

router
    .get("/", getAllBlogs)
    .post("/add", AddBlogs)
    .delete("/:BlogId", RemoveBlogs)
    .put("/:BlogId", editBlogs)

module.exports = router