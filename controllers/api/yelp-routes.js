yelpBaseURL = 'https://api.yelp.com/v3/businesses/search?'
yelpBearer;

let yelpClientId = 
// This calls the API, just update the url to have your key's name.
 async function fetchKey() {
    const url = 'https://yorkieportunus.herokuapp.com/store/yelp-client-id'
    const response = await fetch(url);
    const key = await response.json();
    return key;
}
// Call this wherever you need your key.
fetchKey().then((key) => {
    yelpBearer = key.apiKey;
    console.log(secretKey);
});

let yelpApi =
 // This calls the API, just update the url to have your key's name.
 async function fetchKey() {
    const url = 'https://yorkieportunus.herokuapp.com/store/yelp-api'
    const response = await fetch(url);
    const key = await response.json();
    return key;
}
// Call this wherever you need your key.
fetchKey().then((key) => {
    secretKey = key.apiKey;
    console.log(secretKey);
});



