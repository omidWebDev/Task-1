const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-tab");
  const contents = document.querySelectorAll(".content");

  // Check if there's a saved tab in localStorage
  const savedTabId = localStorage.getItem("activeTab");
  if (savedTabId) {
    document
      .querySelectorAll(".content")
      .forEach((content) => (content.style.display = "none"));
    document.getElementById(savedTabId).style.display = "block";
  } else {
    // If no saved tab, show the first content by default
    contents.forEach((content, index) => {
      content.style.display = index === 0 ? "block" : "none";
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const id = this.id.replace("tab-", "content-");
      contents.forEach((content) => (content.style.display = "none"));
      document.getElementById(id).style.display = "block";
      // Save the active tab id in localStorage
      localStorage.setItem("activeTab", id);
    });
  });
});
