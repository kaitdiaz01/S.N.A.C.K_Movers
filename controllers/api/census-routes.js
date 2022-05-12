const router = require("express").Router();
const { Census } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:zip", (req, res) => {
  API.getCensus(req.params.state, req.params.zip)
    .then((data) => {
        res.send(data.data[1][1]);
        console.log(data);
      // data.data.businesses.forEach((element) => {
      // console.log(
      //   `${element.name} with a rating of ${element.rating} from ${element.review_count} reviews`
      // );
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
 
  


});

module.exports = router;
