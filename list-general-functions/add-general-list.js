function addGeneralList() {
    const DUPLICATE = document.getElementById("template-list-general").content.cloneNode(true);

    // Inserts the duplicate before all of the other cards.
    document.getElementsByTagName("main")[0].insertBefore(
        DUPLICATE,
        document.getElementsByTagName("main")[0].children[0]
    );
}

document.getElementById("add-general-list").addEventListener("click", function() { addGeneralList(); });