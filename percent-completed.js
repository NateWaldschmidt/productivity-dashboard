function percentCompleted(card) {
    const LIST_ITEMS = card.querySelectorAll("li");

    let numChecked = 0; // Keeps track of the number checked.

    for (item of LIST_ITEMS) {
        item.oninput = function() { percentCompleted(card); }; // Does not use an event listener to prevent duplicate handlers.
        if (item.querySelector("input[type=checkbox]").checked) {
            numChecked++;
        }
    }

    // Formats to no decimals and added a "%" symbol.
    card.querySelector(".percent-completed").innerText = (numChecked / LIST_ITEMS.length * 100).toFixed(0) + "%";
}

// Finds cards with percent-completed elements.
for (let percentCard of document.querySelectorAll(".percent-completed")) {
    percentCard = percentCard.closest(".card-container"); // Gets the parent card <div>.

    // Adds an event listener for newly added items.
    percentCard.querySelector(".add-button").addEventListener("click", function() { percentCompleted(percentCard); });

    const LIST_ITEMS = percentCard.querySelectorAll("li");

    // Adds the percentCompleted function to each of the elements.
    for (item of LIST_ITEMS) {
        item.addEventListener("input", function() { percentCompleted(percentCard); });
    }
}