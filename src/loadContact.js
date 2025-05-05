function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const title = document.createElement("h2");
  title.textContent = "Get in Touch";

  const location = document.createElement("p");
  location.textContent = "📍 Behind Dumpster 3B, Central Park, NYC";

  const phone = document.createElement("p");
  phone.textContent = "☎️ 1-800-TRASHY";

  const hours = document.createElement("p");
  hours.textContent = "🕓 Open nightly from dusk till dawn";

  const note = document.createElement("p");
  note.textContent = "🧼 No bathrooms, We're raccoons.";

  contactDiv.append(title, location, phone, hours, note);
  content.appendChild(contactDiv);
}

export default loadContact;
