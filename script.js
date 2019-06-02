/*Search */
document.querySelector("#autocomplete-input").addEventListener("keyup", e => {
    const search = e.target.value;
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.textContent.indexOf(search) >= 0
        ? card.classList.remove("hidden")
        : card.classList.add("hidden");
    });
});