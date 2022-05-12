const zip = document.getElementById("zipcode");
const schoolButtonEl = document.getElementById("school-button")



schoolButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('clciked on button to go to comapnies');
  window.location.replace("/api/schools/"  +33027);
});

