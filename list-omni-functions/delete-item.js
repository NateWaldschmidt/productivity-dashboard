function deleteItem(deleteButton) {
    const LI_TAG = deleteButton.closest("li");
    LI_TAG.remove();
}

{
    // Queries the template and adds the handler for the delete button.
    const TEMPLATE_LI = document.getElementById("template-li-general");
    const DELETE_BUTTON = TEMPLATE_LI.content.querySelector(".delete-button")

    // Ensures not to delete other added handlers.
    if (DELETE_BUTTON.getAttribute("onclick") != null) {
        DELETE_BUTTON.setAttribute(
            "onclick",
            DELETE_BUTTON.getAttribute("onclick") + "; deleteItem(this);"
        )
    } else {
        DELETE_BUTTON.setAttribute(
            "onclick",
            "deleteItem(this);"
        )
    }
}