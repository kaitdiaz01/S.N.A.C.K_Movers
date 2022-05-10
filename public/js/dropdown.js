const basicAutocomplete = document.querySelector('#basic');
// insert school, place, etc data
const data = ['Museum', 'Party', 'Restaurant', 'Concert', 'Architecture'];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(basicAutocomplete, {
  filter: dataFilter
});

const locationAutocomplete = document.querySelector('#location');
// location data goes here
const dataL = [];
const dataFilterL = (value) => {
  return dataL.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(locationAutocomplete, {
  filter: dataFilterL
});

 document.querySelector('#location').addEventListener(e => {
 const userLocation = document.querySelector('#form2').value
 console.log(userLocation);
 fetch('/api/movers/' + userLocation)
 .then(function (response) {
   
   return response.json();
 })
 .then(function (data) {
   console.log(data);
 })
})