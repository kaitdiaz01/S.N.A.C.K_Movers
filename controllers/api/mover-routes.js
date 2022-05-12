const router = require("express").Router();
const { Movers } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:zip", (req, res) => {
  API.getMovers(req.params.zip)
    .then((data) => {
        res.send(data.data.businesses);
        console.log(data);
   
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
 
  


});

module.exports = router;
