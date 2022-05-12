const router = require("express").Router();
const { Census } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:zip/:state", (req, res) => {
  API.getCensus(req.params.zip, req.params.state)
    .then((data) => {
      // res.send(data.data[1][1]);
      const census = data.data[1][1];
      res.render("categories", { census });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

module.exports = router;
