import chefImage from "./assets/raccoon-chef.png";

function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Raccoon Gourmet";

  const tagline = document.createElement("p");
  tagline.textContent = "Fine Trash Dining Since 2024";

  const description = document.createElement("p");
  description.textContent =
    "Enjoy handcrafted delicacies found behind only the finest restaurants and alleyways.";

  const img = document.createElement("img");
  img.src = chefImage;
  img.alt = "Raccoon chef with pizza";
  img.classList.add("home-img");

  homeDiv.appendChild(img);
  homeDiv.appendChild(headline);
  homeDiv.appendChild(tagline);
  homeDiv.appendChild(description);
  content.appendChild(homeDiv);
}

export default loadHome;
