const router = require("express").Router();
const { Schools } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:zip", (req,res) => {
    API.getSchools(req.params.zip)
    .then((data) => {
      res.send(data.data.schools)
      let name = data.data.schools.forEach((element) => {
          console.log(`${element.name} and ${element.rating}`);
          // console.log(element.summary);
          // console.log(element.rating);
          // console.log(element.web-site);
          // console.log(element.overview-url);

        });
        res.render(name)
      })
      .catch(function (error) {
        console.log(error);
      });
});


module.exports = router

