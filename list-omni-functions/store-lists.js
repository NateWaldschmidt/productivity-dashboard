function saveLists() {
    // Ensures that the browser has access to localStorage.
    if (typeof(Storage) !== "undefined") {
        // Finds all of the list cards.
        const CARDS = document.querySelectorAll(".card-container");

        let allLists = new Array(); // Will be used for saving to localStorage.
        
        // Goes through all of the list cards.
        for (let card of CARDS) {
            const TITLE = card.querySelector(".list-title").innerText; // The title for the list.
            let items   = new Array();                                 // Stores all of the items in the list.
            for (let listItem of card.querySelectorAll("li")) {
                const LI_LABEL = listItem.querySelector(".li-label");        // The label for the item in the list.
                const LI_CB    = listItem.querySelector(".li-checkbox");     // The checkbox for the item in the list.
                items.push(new ListItem(LI_LABEL.innerText, LI_CB.checked)); // Adds the object for the listItem.
            }

            // Checks if a new ID needs to be given.
            if (card.getAttribute("data-id") == null) {
                const LIST = new List(TITLE, items);   // Creates the new list object with a new ID.
                card.setAttribute("data-id", LIST.id); // Adds the ID to the list card.
                allLists.push(LIST);                   // Adds to the array for saving.

            } else {
                const LIST = new List(TITLE, items, card.getAttribute("data-id")); // Creates the object with an existing ID.
                allLists.push(LIST);                                               // Adds to the array for saving.
            }
        }
        window.localStorage.lists = JSON.stringify(allLists); // JSON encodes and then saves to localStorage.

      } else {
        console.error("This browser does not support local storage and session storage.");
      }
}

// Checks for changes in a card which has the handler save it's data.
{
    // Queries for the template.
    const TEMPLATE = document.getElementById("template-list-general");

    // Adds the attribute to the entire card.
    const CARD = TEMPLATE.content.querySelector(".card-container");
    if (CARD.getAttribute("onclick") != null) {
        CARD.setAttribute(
            "onclick",
            CARD.getAttribute("onclick") + "; saveLists();"
        );
    } else {
        CARD.setAttribute("onclick", "saveLists();");

    }
}