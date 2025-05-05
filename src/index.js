import loadHome from "./loadHome.js";
import loadMenu from "./loadMenu.js";
import loadContact from "./loadContact.js";
import "./styles.css";

loadHome();

document.querySelector("#home-btn").classList.add("active");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

let currentTab = "home";

const tabMap = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

document.querySelectorAll("nav button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    if (currentTab === tab) return;

    content.innerHTML = "";
    tabMap[tab]();
    currentTab = tab;
    document
      .querySelectorAll("nav button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
