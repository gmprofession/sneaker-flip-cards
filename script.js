const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const detailsButton = card.querySelector(".flip-button");
  const backButton = card.querySelector(".back-button");

  detailsButton.addEventListener("click", () => {
    card.classList.add("is-flipped");
  });

  backButton.addEventListener("click", () => {
    card.classList.remove("is-flipped");
  });
});
