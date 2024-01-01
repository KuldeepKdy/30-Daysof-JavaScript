let success = document.querySelectorAll("button");
let toastBox = document.querySelector("#toastBox");

success.forEach((data) => {
  data.addEventListener("click", function showToast() {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = "success";
    toastBox.appendChild(toast);
    console.log("fxn is executing");
  });
});
