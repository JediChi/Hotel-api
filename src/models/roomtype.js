const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const roomType = new Schema({
    _id: {ObjectId},
    name: {type: String, default: "single", required: true},
})

const RoomType = mongoose.model("roomtype", roomType)

module.exports = RoomType