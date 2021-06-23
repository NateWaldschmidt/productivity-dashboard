function saveLists() {
    if (typeof(Storage) !== "undefined") {
        const CARDS = document.querySelectorAll(".card-container");

        let allLists = new Array();
        
        for (let card of CARDS) {
            if (card.getAttribute("data-id") == null) {
                const TITLE = card.querySelector(".list-title").innerText;
                let items   = new Array();
                for (let listItem of card.querySelectorAll("li")) {
                    const LI_LABEL = listItem.querySelector(".li-label");
                    const LI_CB    = listItem.querySelector(".li-checkbox");
                    items.push(new ListItem(LI_LABEL.innerText, LI_CB.checked));
                }
    
                const LIST = new List(TITLE, items);
                card.setAttribute("data-id", LIST.id);
                allLists.push(LIST);

            } else {
                const TITLE = card.querySelector(".list-title").innerText;
                let items   = new Array();
                for (let listItem of card.querySelectorAll("li")) {
                    const LI_LABEL = listItem.querySelector(".li-label");
                    const LI_CB    = listItem.querySelector(".li-checkbox");
                    items.push(new ListItem(LI_LABEL.innerText, LI_CB.checked));
                }
    
                const LIST = new List(TITLE, items, card.getAttribute("data-id"));
                allLists.push(LIST);
            }
        }
        window.localStorage.lists = JSON.stringify(allLists);

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