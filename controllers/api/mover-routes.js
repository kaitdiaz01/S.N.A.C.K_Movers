const router = require("express").Router();
const { Movers } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const moverData = await Movers.findAll();
    res.status(200).json(moverData);
  } catch (err) {
    res.status(500).json(err);
  }
});
