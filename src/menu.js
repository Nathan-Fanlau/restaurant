function createMenuPage() {
  const menuDiv = document.createElement("div");

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");

  const title = document.createElement("h1");
  title.textContent = "Our Menus";
  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, earum. Neque nesciunt, ipsum voluptatum amet dolores quia, quibusdam ad consectetur ipsa sint excepturi saepe beatae.";

  const squareSection = document.createElement("div");
  squareSection.classList.add("square-section");

  for (let index = 0; index < 4; index++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");

    const squareText = document.createElement("div");
    squareText.classList.add("square-text");
    const squareTitle = document.createElement("h2");
    squareTitle.textContent = `Meal no ${index + 1}`;
    const squareSubtitle = document.createElement("p");
    squareSubtitle.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo et blanditiis.";
    squareText.append(squareTitle, squareSubtitle);

    squareDiv.append(squareText);
    squareSection.append(squareDiv);
  }

  menuWrapper.append(title, subtitle, squareSection);
  menuDiv.append(menuWrapper);

  return menuDiv;
}

export { createMenuPage };
