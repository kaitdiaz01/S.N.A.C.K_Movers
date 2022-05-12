const router = require("express").Router();
const { Census } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:state","/:zip", (req, res) => {
  API.getCensus(req.params.state, req.params.zip)
    .then((data) => {
        res.send(data.data[1][1]);
        console.log(data);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
 
  


});

module.exports = router;
