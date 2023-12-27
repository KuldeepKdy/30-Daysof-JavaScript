function getLocation() {
  //check if the Geolocation is supported in the browser
  if ("geolocation" in navigator) {
    //Request location permission
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    //Geolocation is not supported in this browser
    console.log("Geolocation in not supported in this browser.");
  }
}

document.querySelector("#button").addEventListener("click", function () {
  getLocation();
});
