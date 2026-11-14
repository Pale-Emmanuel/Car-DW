
"use strict";

// Select the search elements
const makeFilter = document.getElementById("makeFilter");
const modelFilter = document.getElementById("modelFilter");
const priceFilter = document.getElementById("priceFilter");
const locationFilter = document.getElementById("locationFilter");
const searchButton = document.getElementById("searchBtn");
const searchInput = document.querySelector(".headInput");

// Get all vehicle cards
const carCards = document.querySelectorAll(".carContainer");

// Search and filter vehicles
function searchVehicles() {

    const selectedMake = makeFilter.value;
    const selectedModel = modelFilter.value;
    const selectedPrice = priceFilter.value;
    const selectedLocation = locationFilter.value;
    const searchText = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    carCards.forEach(card => {

        const make = card.dataset.make;
        const model = card.dataset.model;
        const price = Number(card.dataset.price);
        const location = card.dataset.location;

        // Check make
        const matchesMake =
            selectedMake === "" || make === selectedMake;

        // Check model
        const matchesModel =
            selectedModel === "" || model === selectedModel;

        // Check price
        let matchesPrice = true;

        if (selectedPrice !== "") {
            const [minimum, maximum] = selectedPrice
                .split("-")
                .map(Number);

            matchesPrice = price >= minimum && price <= maximum;
        }
        const matchesLocation = 
        selectedLocation === "" || location === selectedLocation;

        // Check text search
        const matchesText =
            card.textContent.toLowerCase().includes(searchText);

        // Show or hide vehicle
        if (
            matchesMake && 
            matchesModel && 
            matchesPrice && 
            matchesLocation && 
            matchesText
        ) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    console.log(`${visibleCount} vehicle(s) found.`);
}

// Search button
searchButton.addEventListener("click", searchVehicles);

console.log("Search button:", searchButton);
console.log("Search input:", searchInput);

// Search when Enter is pressed
searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchVehicles();
    }
});

// Search when filters change
makeFilter.addEventListener("change", searchVehicles);
modelFilter.addEventListener("change", searchVehicles);
priceFilter.addEventListener("change", searchVehicles);
locationFilter.addEventListener("change", searchVehicles)

console.log("Heisenberg Auto Gallery JavaScript loaded successfully.");

//View details button
const detailsButtons = document.querySelectorAll(".viewDetailsBtn");
console.log(detailsButtons);

detailsButtons.forEach(button => {
    button.addEventListener("click", () => {

        const car = button.closest(".carContainer");

        const image = car.querySelector("img");

        const specifications = car.querySelectorAll(".carP");

        modalImage.src = image.src;

        modalTitle.textContent = car.dataset.make + " " + car.dataset.model;

        modalYear.textContent = specifications[1].textContent;

        modalPrice.textContent = "$" + Number(car.dataset.price).toLocaleString();

        modalLocation.textContent = "Location: " + car.dataset.location;

        carModal.style.display = "flex";

    });
});

//Make the close button works
const closeModal = document.querySelector(".closeModal");

closeModal.addEventListener("click", () => {
    carModal.style.display = "none";
});

//Select the model elements
const carModal = document.getElementById("carModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalYear = document.getElementById("modalYear");

const modalPrice = document.getElementById("modalPrice");

const modalLocation = document.getElementById("modalLocation");

//Close the modal by clicking outside
carModal.addEventListener("click", (event) => {

    if (event.target === carModal) {
        carModal.style.display = "none";
    }

});

//Close the modal using the escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        carModal.style.display = "none";
    }

});

// Contact Form Submit Event Listener
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.textContent = "Thank you, " + visitorName.value +
        "! We appreciate you contacting Heisenberg Auto Gallery.";

    successMessage.style.display = "block";

    contactForm.reset();
});

const visitorName = document.getElementById("visitorName");

const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("input", function() {
    successMessage.style.display = "none";
});
