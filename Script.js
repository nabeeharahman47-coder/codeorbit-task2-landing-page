"use strict";

// Display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Handle product button clicks
const productButtons = document.querySelectorAll(".product-btn");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");

    alert(
      "Thank you for exploring " +
      (productName || "our product") +
      "! This is a demo landing page for the internship task."
    );
  });
});