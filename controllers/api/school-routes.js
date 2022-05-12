const router = require("express").Router();
const { Schools } = require("../../models");
const API = require("../../utils/apiCalls");
const withAuth = require('../../utils/auth')

router.get("/:zip", withAuth, (req, res) => {
  console.log("looking for schools");
  API.getSchools(req.params.zip)
    .then((data) => {
      const companies = data.data.schools;
      res.render("companies", { companies });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
