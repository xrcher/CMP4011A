//=========================================unsdg.js========================================\\

const titleElement1 = document.querySelector("#goal1title");
const titleElement2 = document.querySelector("#goal2title");
const titleElement3 = document.querySelector("#goal3title");

document.addEventListener("DOMContentLoaded", () => {
    fetch("json/unsdg.json")
        .then((response) => response.json())
        .then((responseData) => {
            if (Array.isArray(responseData)) {
                responseData.forEach((item) => {

                    //Goal 1
                    const goal1title = titleElement1;
                    goal1title.textContent = item.a1;

                    //Goal 2
                    const goal2title = titleElement2;
                    goal2title.textContent = item.b1;

                    //Goal 3
                    const goal3title = titleElement3;
                    goal3title.textContent = item.c1;

                });
            } else {
                console.error("Invalid JSON format: Expected an array");
            }
        })
        .catch((error) => console.error("Error fetching JSON data:", error));
});



























/*
const sectionElement01 = document.querySelector("#goal1Contentbox");


document.addEventListener("DOMContentLoaded", () => {
    fetch("json/unsdg.json")
        .then((response) => response.json())
        .then((responseData) => {
            if (Array.isArray(responseData)) {
                responseData.forEach((item) => {

                    //goal1Text
                    // const goal1Contentbox=document.createElement("article");
                    // goal1Contentbox.setAttribute("class","goal1txt");
                    
                    const goal1Text=document.createElement("p");
                    goal1Text.textContent=" "+item.p1;
                    // goal1Contentbox.appendChild(goal1Text)
                    sectionElement01.appendChild(goal1Text);







                });
            } else {
                console.error("Invalid JSON format: Expected an array");
            }
        })
        .catch((error) => console.error("Error fetching JSON data:", error));
});
*/