//=========================================teaminfo.html========================================//

document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector(".row.mgt50px");
    fetch("json/teaminfoData.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then((data) => {
            const teamData = data.team;
            teamContainer.innerHTML = "";
            teamData.forEach((member, index) => {

                const column = document.createElement("div");
                column.classList.add("column");
                column.innerHTML = `
                    <div class="imgBox">
                        <img src="assets/teamimgs/${member.image}.jpg" alt="Team member photo ${member.image}">
                    </div>
                    <div class="details">
                        <h3>Member Name: <br><span>${member.name}</span></h3>
                        <p class="bio">${member.bio}</p>
                    </div>
                `;
                teamContainer.appendChild(column);
            });
            //footer list
            const footerContainer = document.getElementById('footer');
            data.footer.forEach(footer => {

            const footerTitle = document.createElement('h2');
            footerTitle.textContent = footer.title;

            const footerDescription = document.createElement('p');
            footerDescription.textContent = footer.description;

            //footer container item creator
            footerContainer.appendChild(footerTitle);
            footerContainer.appendChild(footerDescription);
        });
        })
        .catch((error) => {
            console.error("Error fetching team data:", error);
        });
});