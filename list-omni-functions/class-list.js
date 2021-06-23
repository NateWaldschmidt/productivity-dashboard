class List {
    static index = 0; // Used for assigning IDs to elements.

    constructor(title, items, id = -1) {
        if (id == -1) {
            List.index++;
            this.id = List.index; // The ID used for saving.
        } else {
            this.id = id;
        }
        this.title = title;      // The title of this list.
        this.items = items;      // An array of listItem objects.
    }
}

class ListItem {
    constructor(itemName, checked) {
        this.itemName = itemName; // The name for this item.
        this.checked  = checked;  // A boolean of whether it is checked or not.
    }
}