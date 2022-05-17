const router = require("express").Router();
const { Hotels } = require("../../models");
const API = require("../../utils/apiCalls");
const withAuth = require('../../utils/auth')

router.get("/:zip", withAuth, (req, res) => {
  console.log("looking for hotels");
  API.getHotels(req.params.zip)
    .then((data) => {
      const hotels = data.data.businesses;
      res.render("hotels", { hotels });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;