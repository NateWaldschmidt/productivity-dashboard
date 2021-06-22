function addGeneralItem(card) {
    const TEMPLATE = document.getElementById("template-li-general");
    const DUPLICATE = TEMPLATE.content.cloneNode(true);
    card.querySelector("ul").appendChild(DUPLICATE);
}