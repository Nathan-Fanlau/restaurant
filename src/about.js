function createAboutPage() {
  const aboutDiv = document.createElement("div");

  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("about-wrapper");

  const title = document.createElement("h1");
  title.textContent = "About Us";
  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, earum. Neque nesciunt, ipsum voluptatum amet dolores quia, quibusdam ad consectetur ipsa sint excepturi saepe beatae.";

  aboutWrapper.append(title, subtitle);
  aboutDiv.append(aboutWrapper);

  return aboutDiv;
}

export { createAboutPage };
