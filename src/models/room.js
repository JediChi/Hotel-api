const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const hotel = new Schema({
    _id: {type: ObjectId},
    name: {type: String, default: "Room 0", required: true},
    roomType: {type: ObjectId, required: true, ref: "RoomType"},
    price: {type: Number, required: true}
})

const HotelName = mongoose.model("room", hotel)

module.exports = HotelName