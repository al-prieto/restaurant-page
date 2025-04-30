function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menuList = document.createElement("ul");

  const items = [
    "🍕 Pizza Suprema - $12.99",
    "🥗 Ensalada Mediterranea - $8.99",
    "🍔 Hamburguesa Clasica - $10.50",
    "🧁 Cupcake de Vainilla - $3.25",
  ];

  items.forEach((text) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = text;
    menuList.appendChild(menuItem);
  });

  menuDiv.appendChild(menuList);

  content.appendChild(menuDiv);
}

export default loadMenu;
