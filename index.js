const switcher = document.getElementById("btnswitch");
const cards = document.getElementById("cards");

switcher.addEventListener("click", (e) => {
  cards.classList.toggle("cards-annually");
});
