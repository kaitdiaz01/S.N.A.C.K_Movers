const hotelButtonEl = document.getElementById("hotel-button")

hotelButtonEl.onclick = function(){
  console.log('clicked on button to go to hotels');
  document.location.replace("/api/hotels/" + localStorage.getItem("storeZip"));
};
