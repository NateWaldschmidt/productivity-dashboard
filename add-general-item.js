function addGeneralItem(button) {
    // Gets the <template> and then makes the duplicate.
    const DUPLICATE = document.getElementById("template-li-general").content.cloneNode(true);

    // Appends a new <li> to the <ul>.
    button.closest(".card-container").querySelector("ul").append(DUPLICATE);
}

// Adds the handler to all of the add buttons that already exist.
for (let generalList of document.querySelectorAll(".card-container.general-list")) {
    generalList.querySelector(".add-button").addEventListener("click", function() { addGeneralItem(); });
}

// Selects the add button inside the template for dynamically added lists.
document.getElementById("template-list-general").content.querySelector(".add-button").setAttribute("onclick", "addGeneralItem(this)");
