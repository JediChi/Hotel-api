const express = require("express");
const RoomType = require("../models/roomtype");
const router = new express.Router();

router.post("/room-type", async (req, res) => {
  const roomType = new RoomType(req.body);
  try {
    await roomType.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/room-type", async (req, res) => {
  try {
    const roomType = await RoomType.find({});
    res.send(roomType);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
