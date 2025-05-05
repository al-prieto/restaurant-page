import pizzaImg from "./assets/dumpster-supreme-pizza.png";
import saladImg from "./assets/alleyway-mediterranean-salad.png";
import burgerImg from "./assets/trashcan-classic-burger.png";
import cupcakeImg from "./assets/vanilla-dumpster-cupcake.png";

function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const title = document.createElement("h2");
  title.textContent = "Tonight's Specials";

  const items = [
    {
      name: "Cardboard Pizza",
      price: "$4.99",
      desc: "Topped with recycled pepperoni and pride.",
    },
    {
      name: "Dumpster Nachos",
      price: "$3.50",
      desc: "Stale chips. Warm cheese. Found love.",
    },
    {
      name: "Sock au Vin",
      price: "$6.75",
      desc: "Stewed in mystery juice. Not vegan.",
    },
    {
      name: "Garbage Burger",
      price: "$5.25",
      desc: "Served rare, like your luck.",
    },
  ];

  const menuList = document.createElement("ul");

  items.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = `<strong>${item.name}</strong> - ${item.price}<br><em>${item.desc}</em>`;
    menuList.appendChild(menuItem);
  });

  menuDiv.appendChild(title);
  menuDiv.appendChild(menuList);
  content.appendChild(menuDiv);
}

export default loadMenu;
