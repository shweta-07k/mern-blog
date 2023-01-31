const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "PLEASE PROVIDE TITLE"]
    },
    desc: {
        type: String,
        required: [true, "PLEASE PROVIDE TITLE"]
    },
    image: {
        type: String,
        required: [true, "PLEASE PROVIDE TITLE"]
    },
    publish: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("blog", blogSchema)