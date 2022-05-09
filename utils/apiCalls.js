const axios = require('axios');
require("dotenv").config();

yelpBaseURL = 'https://api.yelp.com/v3/businesses/search?';

class Yelp {
  constructor(name, rating, price)
}
axios.get(yelpBaseURL + "term=breakfast&location=Jupiter", {
 headers: {
   Authorization: 'Bearer ' + process.env.YELP_API_SECRET //the token is a variable which holds the token
 }
})
.then(data => { console.log(data.data); return data.data;})
.catch(function (error) {
  // handle error
  console.log(error);
})



module.exports = Yelp;