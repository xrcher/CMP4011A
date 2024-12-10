//=========================================unsdg.js========================================\\

const titleElement1 = document.querySelector("#goal1title");
const titleElement2 = document.querySelector("#goal2title");
const titleElement3 = document.querySelector("#goal3title");
const goal1contentElement = document.querySelector("#goal1Contentbox");
const goal2contentElement = document.querySelector("#goal2Contentbox");
const goal3contentElement = document.querySelector("#goal3Contentbox");

document.addEventListener("DOMContentLoaded", () => {
    fetch("json/unsdg.json")
        .then((response) => response.json())
        .then((responseData) => {
            if (Array.isArray(responseData)) {
                responseData.forEach((item) => {

                    //Goal 1
                    const goal1title = titleElement1;
                    goal1title.textContent = item.a1;
                    const goal1content= document.createElement("article");
                    const goal1stat1=document.createElement("p");
                    goal1stat1.setAttribute("class","statistic");
                    goal1stat1.textContent= item.a2;
    
                    

                    goal1content.appendChild(goal1stat1);
                    goal1contentElement.appendChild(goal1content);



                    //Goal 2
                    const goal2title = titleElement2;
                    goal2title.textContent = item.b1;
                    const goal2content=document.createElement("article");
                    const goal2stat1=document.createElement("p");
                    goal2stat1.textContent=item.b2;
                    goal2stat1.setAttribute("class","statistic")

                    goal2content.appendChild(goal2stat1);
                    goal2contentElement.appendChild(goal2content);


                    //Goal 3
                    const goal3title = titleElement3;
                    goal3title.textContent=item.c1;
                    const goal3content=document.createElement("article");
                    const goal3stat1=document.createElement("p");
                    goal3stat1.textContent=item.c2;
                    goal3stat1.setAttribute("class","statistic")

                    goal3content.appendChild(goal3stat1)
                    goal3contentElement.appendChild(goal3stat1);



                    
                   

                    

                });
            } else {
                console.error("Invalid JSON format: Expected an array");
            }
        })
        .catch((error) => console.error("Error fetching JSON data:", error));
});



























