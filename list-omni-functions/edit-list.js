function editList(editButton) {
    const CARD = editButton.closest(".card-container"); // Queries the container.

    const DELETE_BUTTONS = CARD.querySelectorAll(".delete-button"); // Queries all delete buttons in this card.
    for(let deleteButton of DELETE_BUTTONS) {
        deleteButton.hidden = !deleteButton.hidden; // Toggles if it is hidden.
    }
}

{
    // Adds the handler to all of the edit buttons.
    const TEMPLATE_LIST = document.getElementById("template-list-general");
    const EDIT_BUTTON   = TEMPLATE_LIST.content.querySelector(".edit-button");
    EDIT_BUTTON.setAttribute("onclick", EDIT_BUTTON.getAttribute("onclick") + "; editList(this); ");
}