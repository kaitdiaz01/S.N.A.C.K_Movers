const locationEl = document.getElementById("location");
const zipCode = document.getElementById("zipcode");
const userinputZip = document.getElementById("grab-zip");

window.onload = function() {
locationEl.addEventListener("click", (event) => {
  event.preventDefault();
  var currentZip = zipcode.value;
  localStorage.setItem("storeZip", currentZip);
  console.log(zipcode.value);
  console.log("clicked on button to go to comapnies");
  document.location.replace("/categories");
});

}

// const locationEl = document.getElementById("location");
// const zipCode = document.getElementById("zipcode");
// const userinputZip = document.getElementById("grab-zip");


// locationEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("clicked on button to go to comapnies");
//   document.location.replace("/categories");
// });





