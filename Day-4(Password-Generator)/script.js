const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

//Selectors
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const totalChar = document.getElementById("total-char");
const passwordBox = document.getElementById("pass-box");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() + dataSet.length)];
};

var password = "";
const generatePassword = (password) => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  console.log(password);
};

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});
