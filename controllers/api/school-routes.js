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
      // let name = data.data.schools.forEach((element) => {
      //     console.log(`${element.name} and ${element.rating}`);
      // console.log(element.summary);
      // console.log(element.web-site);
      // console.log(element.overview-url);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
