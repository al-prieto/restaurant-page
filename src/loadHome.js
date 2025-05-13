import chefImage from "./assets/raccoon-chef.png";

function loadHome() {
  const content = document.getElementById("content");

  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home");

  const textSection = document.createElement("div");
  textSection.classList.add("home-text");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Raccoon Gourmet";

  const tagline = document.createElement("p");
  tagline.textContent = "Fine Trash Dining Since 2024";

  const description = document.createElement("p");
  description.textContent =
    "Enjoy handcrafted delicacies found behind only the finest restaurants and alleyways.";

  textSection.append(headline, tagline, description);

  const img = document.createElement("img");
  img.src = chefImage;
  img.alt = "Raccoon chef with pizza";
  img.classList.add("home-img");

  homeWrapper.append(textSection, img);
  content.appendChild(homeWrapper);
}

export default loadHome;
