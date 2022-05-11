const router = require("express").Router();
const { Schools } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:zip", (req,res) => {
    API.getSchools(req.params.zip)
    .then((data) => {
      res.send(data.data)
        console.log(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
});

module.exports = router