let greatSchools;

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

