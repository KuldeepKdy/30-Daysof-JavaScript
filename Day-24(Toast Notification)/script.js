let success = document.querySelectorAll("button");
let toastBox = document.querySelector("#toastBox");

success.forEach((data) => {
  data.addEventListener("click", function showToast(data) {
    let msg = data.target.innerHTML;
    let toast = document.createElement("div");
    toast.classList.add("toast");
    if (msg.includes("Success")) {
      toast.innerHTML = `✅ Successfully Submitted`;
      toast.classList.add("success");
    } else if (msg.includes("Error")) {
      toast.innerHTML = `❌ Please fix the error!`;
      toast.classList.add("error");
    } else if (msg.includes("Invalid")) {
      toast.innerHTML = `❗Invalid input, Check Again`;
      toast.classList.add("invalid");
    }
    // toast.innerHTML = `now check msg ${msg}`;
    toastBox.appendChild(toast);
    // console.log("fxn is executing");

    setTimeout(() => {
      toast.remove();
    }, 5000);
  });
});
