const axios = require("axios");
require("dotenv").config();

yelpBaseURL = "https://api.yelp.com/v3/businesses/search?";
economicsBaseUrl = `https://apps.bea.gov/api/data/?UserID=${process.env.BEA_KEY}`;
greatSchoolsBaseURL = "https://gs-api.greatschools.org/schools?limit=20&";

// class Yelp {
//   constructor(name, rating, price)
// }

module.exports = {
  getMovers: (loc) => {
    return axios.get(yelpBaseURL + "term=movers&location=" + loc, {
      headers: {
        Authorization: "Bearer " + process.env.YELP_API_SECRET, //the token is a variable which holds the token
      },
    });
  },
  getSchools: (zipCode) => {
    return axios.get(greatSchoolsBaseURL + "zip=" + zipCode, {
      headers: {
        "X-API-Key": process.env.SCHOOL_API,
      },
    });
  },
  getEconomics: () => {
    axios.get(economicsBaseUrl).then((data) => {
      console.log(data.data);
      return data.data;
    });
  },
};
