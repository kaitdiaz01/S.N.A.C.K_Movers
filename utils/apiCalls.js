const axios = require("axios");
require("dotenv").config();

yelpBaseURL = "https://api.yelp.com/v3/businesses/search?";
economicsBaseUrl = `https://apps.bea.gov/api/data/?UserID=${process.env.BEA_KEY}`;
greatSchoolsBaseURL = "https://gs-api.greatschools.org/schools?limit=20&";
censusBaseURL = `https://api.census.gov/data/2019/acs/acs5?get=NAME,B19301_001E&for=zip%20code%20tabulation%20area:`;
// 33477&in=state:12&key=${process.env.CENSUS_API}

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
  // getEconomics: () => {
  //   axios.get(economicsBaseUrl).then((data) => {
  //     console.log(data.data);
  //     return data.data;
  //   });
  // },

  getCensus: (state, zipCode) => {
    return axios
      .get(
        censusBaseURL +
          `${zipCode}&in=state:${state}&key=${process.env.CENSUS_API}`
      )
      // .then((data) => {
      //   console.log(data.data[1][1]);
      //   return data.data[1][1];
      // });
  },
};
