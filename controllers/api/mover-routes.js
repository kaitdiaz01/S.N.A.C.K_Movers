const router = require("express").Router();
const { Movers } = require("../../models");
const API = require("../../utils/apiCalls");
const withAuth = require('../../utils/auth')

router.get("/:zip", withAuth, (req, res) => {
  console.log("looking for movers");
  API.getMovers(req.params.zip)
    .then((data) => {
      const movers = data.data.businesses;
      res.render("movers", { movers });
    })
    .catch(function (error) {
      console.log(error);
    });
});


module.exports = router;

// router.get("/:zip", (req, res) => {
//   API.getMovers(req.params.zip)
//     .then((data) => {
//         res.send(data.data.businesses);
//         console.log(data);
   
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// });