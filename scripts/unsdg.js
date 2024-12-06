//=========================================unsdg.js========================================//

const sectionElement1 = document.querySelector("#");
const sectionElement2 = document.querySelector("#");
const sectionElement3 = document.querySelector("#");
const sectionElement4 = document.querySelector("#");

document.addEventListener("DOMContentLoaded", () => {
    fetch("json/unsdg.json")
        .then((response) => response.json())
        .then((responseData) => {
            if (Array.isArray(responseData)) {
                responseData.forEach((item) => {


                });
            } else {
                console.error("Invalid JSON format: Expected an array");
            }
        })
        .catch((error) => console.error("Error fetching JSON data:", error));
});
