const zip = document.getElementById("zipcode");
const schoolButtonEl = document.getElementById("school-button")



schoolButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('clciked on button to go to comapnies');
  document.location.replace("/api/schools/" + localStorage.getItem("storeZip"));
});



// const zip = document.getElementById("zipcode");
// const schoolButtonEl = document.getElementById("school-button")



// schoolButtonEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log('clciked on button to go to comapnies');
//   document.location.replace("/api/schools/"  +33027);
// });