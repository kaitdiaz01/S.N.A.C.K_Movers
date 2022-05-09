const axios = require('axios').default;

let greatSchools;
let greatSchoolsBaseURL = 'https://gs-api.greatschools.org/nearby-schools?'


// This calls the API, just update the url to have your key's name.
async function fetchKey() {
  const url = "https://yorkieportunus.herokuapp.com/store/greatschools";
  const response = await fetch(url);
  const key = await response.json();
  return key;
}
// Call this wherever you need your key.
fetchKey().then((key) => {
  greatSchools = key.apiKey;
  console.log(greatSchools);
});



// 'https://gs-api.greatschools.org/nearby-schools?lat=37.7940627&lon=-122.2680029&limit=3&distance=5' \
// --header 'x-api-key: myapikey’

