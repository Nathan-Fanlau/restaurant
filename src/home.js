import foodImage from "./img/istockphoto-1190330112-612x612.jpg";

function createHomePage() {
  const homeDiv = document.createElement("div");

  const landing = document.createElement("div");
  landing.classList.add("landing");
  const landingWrapper = document.createElement("div");
  landingWrapper.classList.add("landing-wrapper");

  const landingText = document.createElement("div");
  landingText.classList.add("landing-text");
  const title = document.createElement("h1");
  title.textContent = "Enjoy Our Delicious Meal";
  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, earum. Neque nesciunt, ipsum voluptatum amet dolores quia, quibusdam ad consectetur ipsa sint excepturi saepe beatae.";
  const bookButton = document.createElement("button");
  bookButton.textContent = "BOOK A TABLE";
  landingText.append(title, subtitle, bookButton);

  const landingPic = document.createElement("div");
  landingPic.classList.add("landing-pic");
  const foodImg = document.createElement("img");
  foodImg.src = foodImage;
  landingPic.append(foodImg);

  landingWrapper.append(landingText, landingPic);
  landing.append(landingWrapper);

  const squareSection = document.createElement("div");
  squareSection.classList.add("square-section");

  for (let index = 0; index < 4; index++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");

    const squareText = document.createElement("div");
    squareText.classList.add("square-text");
    const squareTitle = document.createElement("h2");
    squareTitle.textContent = "Enjoy Our Delicious Meal";
    const squareSubtitle = document.createElement("p");
    squareSubtitle.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo et blanditiis.";
    squareText.append(squareTitle, squareSubtitle);

    squareDiv.append(squareText);
    squareSection.append(squareDiv);
  }

  homeDiv.append(landing, squareSection);
  return homeDiv;
}

export { createHomePage };
