function loadLists() {
    for (let listData of JSON.parse(window.localStorage.lists)) {
        const DUPLICATE = document.getElementById("template-list-general").content.cloneNode(true);

        DUPLICATE.querySelector(".card-container").setAttribute("data-id", listData.id);
        DUPLICATE.querySelector(".list-title").innerText = listData.title;

        for (let listItem of listData.items) {
            const DUP_ITEM = document.getElementById("template-li-general").content.cloneNode(true);
            DUP_ITEM.querySelector(".li-label").innerText = listItem.itemName;
            DUP_ITEM.querySelector(".li-checkbox").checked      = listItem.checked;
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