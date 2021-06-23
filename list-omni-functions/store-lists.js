function saveLists() {
    if (typeof(Storage) !== "undefined") {
        const CARDS = document.querySelectorAll(".card-container");
        console.log(CARDS);
      } else {
        console.error("This browser does not support local storage and session storage.");
      }
}

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