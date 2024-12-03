//=========================================index.html========================================//

const sectionElement1 = document.querySelector("#jsoninformation");
const sectionElement2 = document.querySelector("#jsonwallpaperhome");
const sectionElement3 = document.querySelector("#jsonInformation2");
const sectionElement4 = document.querySelector("#jsonviewgoals");

document.addEventListener("DOMContentLoaded", () => {
    fetch("json/indexData.json")
        .then((response) => response.json())
        .then((responseData) => {
            if (Array.isArray(responseData)) {
                responseData.forEach((item) => {

                    // information
                    const jsonInformation = document.createElement("article");
                    jsonInformation.setAttribute("class", "services");

                    const paraElement1 = document.createElement("p");
                    paraElement1.textContent = " " + item.a1;
                    const paraElement2 = document.createElement("p");
                    paraElement2.textContent = " " + item.a2;

                    jsonInformation.appendChild(paraElement1);
                    jsonInformation.appendChild(paraElement2);
                    sectionElement1.appendChild(jsonInformation);

                    // wallpaperhome
                    const jsonwallpaperhome = document.createElement("article");
                    jsonwallpaperhome.setAttribute("class", "services");

                    const paraElement3 = document.createElement("h1");
                    paraElement3.textContent = " " + item.b1;
                    const paraElement4 = document.createElement("p");
                    paraElement4.textContent = " " + item.b2;

                    jsonwallpaperhome.appendChild(paraElement3);
                    jsonwallpaperhome.appendChild(paraElement4);
                    sectionElement2.appendChild(jsonwallpaperhome);

                    // information2
                    const jsoninformation2 = document.createElement("article");
                    jsoninformation2.setAttribute("class", "services");

                    const paraElement5 = document.createElement("p");
                    paraElement5.textContent = " " + item.c1;
                    const paraElement6 = document.createElement("h2");
                    paraElement6.textContent = " " + item.c2;
                    const paraElement7 = document.createElement("p");
                    paraElement7.textContent = " " + item.c3;
                    const paraElement8 = document.createElement("h2");
                    paraElement8.textContent = " " + item.c4;
                    const paraElement9 = document.createElement("p");
                    paraElement9.textContent = " " + item.c5;
                    const paraElement10 = document.createElement("h2");
                    paraElement10.textContent = " " + item.c6;
                    const paraElement11 = document.createElement("p");
                    paraElement11.textContent = " " + item.c7;

                    jsoninformation2.appendChild(paraElement5);
                    jsoninformation2.appendChild(paraElement6);
                    jsoninformation2.appendChild(paraElement7);
                    jsoninformation2.appendChild(paraElement8);
                    jsoninformation2.appendChild(paraElement9);
                    jsoninformation2.appendChild(paraElement10);
                    jsoninformation2.appendChild(paraElement11);
                    sectionElement3.appendChild(jsoninformation2);


                    // viewgoals
                    const jsonviewgoals = document.createElement("article");
                    jsonviewgoals.setAttribute("class", "services");

                    const paraElement12 = document.createElement("h1");
                    paraElement12.textContent = " " + item.d1;
                    const paraElement13 = document.createElement("p");
                    paraElement13.textContent = " " + item.d2;

                    jsonviewgoals.appendChild(paraElement12);
                    jsonviewgoals.appendChild(paraElement13);
                    sectionElement4.appendChild(jsonviewgoals);

                });
            } else {
                console.error("Invalid JSON format: Expected an array");
            }
        })
        .catch((error) => console.error("Error fetching JSON data:", error));
});
