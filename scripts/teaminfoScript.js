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
            teamContainer.innerHTML = "";
            data.forEach((member, index) => {

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
        })
        .catch((error) => {
            console.error("Error fetching team data:", error);
        });
});