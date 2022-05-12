const locationEl = document.getElementById("location");
const zipCode = document.getElementById("zipcode");
const userinputZip = document.getElementById("grab-zip");


locationEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked on button to go to comapnies");
  document.location.replace("/categories");
});

userinputZip.innerHTML = '12234';



