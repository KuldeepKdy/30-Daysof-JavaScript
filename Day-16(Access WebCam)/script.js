function acessCamera() {
  const cameraFeed = document.querySelector("#cameraFeed");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      cameraFeed.srcObject = stream;
    })

    .catch((error) => {
      console.error("error accessing camera:", error);
    });
}

document.querySelector("button").addEventListener("click", function () {
  acessCamera();
});
