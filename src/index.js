import "./style.css";

import { createHomePage } from "./home";
import { createAboutPage } from "./about";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

content.appendChild(createHomePage());

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id == "home"){
            content.replaceChildren(createHomePage());
        }
        else if(e.target.id == "menu"){
            content.replaceChildren(createHomePage());
        }
        else if(e.target.id == "about"){
            content.replaceChildren(createAboutPage());
        }
    })
})