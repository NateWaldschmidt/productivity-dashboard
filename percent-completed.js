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

    // Formats the percentage string for displaying.
    if (LIST_ITEMS.length == 0) {
        CARD.querySelector(".percent-completed").innerText = "0%";
    } else {
        CARD.querySelector(".percent-completed").innerText = (numChecked / LIST_ITEMS.length * 100).toFixed(0) + "%";
    }
}

{
    // Queries for the template.
    const TEMPLATE     = document.getElementById("template-list-general");
    const PERCENT_CARD = TEMPLATE.content.querySelector(".percent-completed");

    // Ensures that the card has a percent-completed piece.
    if (PERCENT_CARD != null) {
        // Adds the attribute to the entire card.
        const CARD = TEMPLATE.content.querySelector(".card-container");
        CARD.setAttribute("onclick", "percentCompleted(this)");
    }
}
