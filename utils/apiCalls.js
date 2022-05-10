const axios = require('axios');
require("dotenv").config();

yelpBaseURL = 'https://api.yelp.com/v3/businesses/search?';
beaBaseUrl = 'https://apps.bea.gov/api/data'


axios.get(yelpBaseURL + "term=dinner&location=washingtonDC", {
 headers: {
   Authorization: 'Bearer ' + process.env.YELP_API_SECRET //the token is a variable which holds the token
 }
})
.then(data => 
  { data.data.businesses.forEach(element => {
    console.log(`${element.name} with a rating of ${element.rating} from ${element.review_count} reviews`)
    
  });
    return data.data;
  })
.catch(function (error) {
  // handle error
  console.log(error);
})








// class Yelp {
//   constructor(name, rating, price)
// }

// module.exports = Yelp;