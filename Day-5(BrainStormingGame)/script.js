let cardsArray = [
  {
    name: "CSS",
    img: "https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "HTML",
    img: "https://th.bing.com/th/id/OIP.CYAMXqfgsWg3Ix91RJbbYAHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "JQuery",
    img: "https://th.bing.com/th/id/OIP.-sFycI-fAPivoGL7VxU71wHaBr?w=277&h=79&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "JS",
    img: "https://th.bing.com/th/id/OIP.1AAaaV4A7tmDzY5l4VyvkgHaFj?w=285&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Node",
    img: "https://th.bing.com/th/id/OIP.5gf2JQQmWla-GU-WXTrGcgHaE8?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Python",
    img: "https://th.bing.com/th/id/OIP.BQq9rr6XuIBkCe0z5RHqewHaHa?pid=ImgDet&rs=1",
  },
];

const parentDiv = document.querySelector("#card-section");
for (let i = 0; i < cardsArray.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  //   childDiv.dataset.name = cardsArray[i].name;
  parentDiv.appendChild(childDiv);
}
