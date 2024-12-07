//=========================================unsdg.js========================================//

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
