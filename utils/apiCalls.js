const axios = require('axios');
require("dotenv").config();

yelpBaseURL = 'https://api.yelp.com/v3/businesses/search?';
economicsBaseUrl = `https://apps.bea.gov/api/data/?UserID=${process.env.BEA_KEY}`
greatSchoolsBaseURL = 'https://gs-api.greatschools.org/schools?limit=20&'



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

axios.get(greatSchoolsBaseURL + 'zip=33027', {
  headers: {
    'X-API-Key': process.env.SCHOOL_API
  }
}) 
.then(data => {
  console.log(data.data);
  return data.data;
})
.catch(function (error) {
  console.log(error);
  
})

axios.get(economicsBaseUrl)
.then(data => {
  console.log(data.data);
  return data.data;
})



// class Yelp {
//   constructor(name, rating, price)
// }

// module.exports = Yelp;