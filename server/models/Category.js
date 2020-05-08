const mongoose = require("mongoose") //用于创建Schema和实例化一个model
const schema = new mongoose.Schema({
    name: { type: String }
})
module.exports = mongoose.model('Category', schema) 