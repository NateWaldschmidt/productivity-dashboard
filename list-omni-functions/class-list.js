class List {
    static index = 0; // Used for assigning IDs to elements.

    constructor(title, items, id = -1) {
        // -1 means that there was no object created for this list previously.
        if (id == -1) {
            List.index++;         // Increments to ensure no duplicate IDs.
            this.id = List.index; // The ID used for saving.

        } else {
            // Ensures future IDs are unique.
            if (id > List.index) {
                List.index = id + 1; 
            }

            this.id = id; // Assigns ID to object from previously defined section.
        }
        this.title = title; // The title of this list.
        this.items = items; // An array of listItem objects.
    }
}

class ListItem {
    constructor(itemName, checked) {
        this.itemName = itemName; // The name for this item.
        this.checked  = checked;  // A boolean of whether it is checked or not.
    }
}