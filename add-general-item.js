function addGeneralItem(card) {
    const TEMPLATE = document.getElementById("template-li-general");
    const DUPLICATE = TEMPLATE.content.cloneNode(true);
    card.querySelector("ul").appendChild(DUPLICATE);
}

// Adds the function call to all of the add buttons.
for (let generalList of document.querySelectorAll(".card-container.general-list")) {
    generalList.querySelector(".add-button").addEventListener("click", function() { addGeneralItem(generalList); });
}