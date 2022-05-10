const router = require("express").Router();
const { Movers } = require("../../models");
const API = require("../../utils/apiCalls");

router.get("/:zip", (req, res) => {
  API.getMovers(req.params.zip)
    .then((data) => {
        res.send(data.data.businesses);
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
 
  

  //   } catch (err) {
  //     res.status(500).json(err);
});

module.exports = router;
