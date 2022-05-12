const locationEl = document.getElementById("location");
const zip = document.getElementById("zipcode");

locationEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('clciked on button to go to comapnies');
  document.location.replace("/categories")
});