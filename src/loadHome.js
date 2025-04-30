function loadHome() {
  const content = document.getElementById("content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Alejandro's Bristol";

  const paragraph = document.createElement("p");
  paragraph.textContent = "The best food in town, served with passion.";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(paragraph);
  content.appendChild(homeDiv);
}

export default loadHome;
