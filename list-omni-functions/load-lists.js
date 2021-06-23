{
    function loadLists() {
        // Gets the lists from localStorage and JSON parses them.
        for (let listData of JSON.parse(window.localStorage.lists)) {
            // Creates a new list card.
            const DUPLICATE = document.getElementById("template-list-general").content.cloneNode(true);

            DUPLICATE.querySelector(".card-container").setAttribute("data-id", listData.id); // Sets the ID for the card.
            DUPLICATE.querySelector(".list-title").innerText = listData.title;               // Sets the title for the card.

            for (let listItem of listData.items) {
                const DUP_ITEM = document.getElementById("template-li-general").content.cloneNode(true);
                DUP_ITEM.querySelector(".li-label").innerText  = listItem.itemName; // Sets the text for an item in the list.
                DUP_ITEM.querySelector(".li-checkbox").checked = listItem.checked;  // Sets the checkbox if checked.

                // Appens the item into the list.
                DUPLICATE.querySelector("ul").insertBefore(
                    DUP_ITEM,
                    DUPLICATE.querySelector("ul").children[0]
                );
            }
        
            // Inserts the duplicate before all of the other cards.
            document.querySelector("main").append(DUPLICATE);
        }
    }
    loadLists();
}