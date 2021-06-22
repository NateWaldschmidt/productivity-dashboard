function percentCompleted(cardChild) {
    const CARD = cardChild.closest(".card-container");

    const LIST_ITEMS = CARD.querySelectorAll("li");

    let numChecked = 0; // Keeps track of the number checked.

    // Counts the number of checked elements.
    for (item of LIST_ITEMS) {
        if (item.querySelector("input[type=checkbox]").checked) {
            numChecked++;
        }
    }

    // Formats to no decimals and added a "%" symbol.
    CARD.querySelector(".percent-completed").innerText = (numChecked / LIST_ITEMS.length * 100).toFixed(0) + "%";
}

// Finds cards with percent-completed elements.
for (let percentCard of document.querySelectorAll(".percent-completed")) {
    percentCard = percentCard.closest(".card-container"); // Gets the parent card <div>.

    const LIST_ITEMS = percentCard.querySelectorAll("li");

    // Adds the percentCompleted function to each of the elements.
    for (item of LIST_ITEMS) {
        item.addEventListener("input", function() { percentCompleted(percentCard); });
    }
}

// Adds handlers to checkboxes.
{
    const TEMPLATE_LI_CB = document.getElementById("template-li-general").content.querySelector("input[type=checkbox]");
    if (TEMPLATE_LI_CB.getAttribute("oninput") != null) {
        TEMPLATE_LI_CB.setAttribute(
            "oninput",
            TEMPLATE_LI_CB.getAttribute("oninput") + "; percentCompleted(this);"
        );
    } else {
        TEMPLATE_LI_CB.setAttribute(
            "oninput",
            "percentCompleted(this)"
        );
    }
}

// Adds handlers when an add button is clicked.
{
    const TEMPLATE_ADD_BUTTON = document.getElementById("template-list-general").content.querySelector(".add-button");
    if (TEMPLATE_ADD_BUTTON.getAttribute("onclick") != null) {
        TEMPLATE_ADD_BUTTON.setAttribute(
            "onclick",
            TEMPLATE_ADD_BUTTON.getAttribute("onclick") + "; percentCompleted(this);"
        );
    } else {
        TEMPLATE_ADD_BUTTON.setAttribute(
            "onclick",
            "percentCompleted(this)"
        );
    }
}

