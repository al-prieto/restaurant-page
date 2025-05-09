import pizzaImg from "./assets/cardboard-pizza.png";
import nachosImg from "./assets/dumpster-nachos.png";
import burgerImg from "./assets/garbage-burger.png";
import sockImg from "./assets/sock-au-vin.png";

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
      img: pizzaImg,
      alt: "Slice of cardboard pizza",
    },
    {
      name: "Dumpster Nachos",
      price: "$3.50",
      desc: "Stale chips. Warm cheese. Found love.",
      img: nachosImg,
      alt: "Dumpster nachos with old cheese",
    },
    {
      name: "Sock au Vin",
      price: "$6.75",
      desc: "Stewed in mystery juice. Not vegan.",
      img: sockImg,
      alt: "Sock aun Vin on a dirty plate",
    },
    {
      name: "Garbage Burger",
      price: "$5.25",
      desc: "Served rare, like your luck.",
      img: burgerImg,
      alt: "Greasy garbage burger",
    },
  ];

  const menuList = document.createElement("ul");
  menuList.classList.add("menu-grid");

  items.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu-card");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt;
    img.classList.add("menu-img");

    const name = document.createElement("h3");
    name.classList.add("item-title");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("item-price");
    price.textContent = item.price;

    const desc = document.createElement("p");
    desc.classList.add("item-desc");
    desc.textContent = item.desc;

    menuItem.appendChild(img);
    menuItem.appendChild(name);
    menuItem.appendChild(price);
    menuItem.appendChild(desc);
    menuList.appendChild(menuItem);
  });

  menuDiv.appendChild(title);
  menuDiv.appendChild(menuList);
  content.appendChild(menuDiv);
}

export default loadMenu;
