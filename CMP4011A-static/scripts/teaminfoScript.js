//=========================================teaminfo.html========================================//

document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector(".width.mgt50px");
    fetch("json/teaminfoData.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network Error");
            }
            return response.json();
        })
        .then((data) => {
            const teamData = data.squad;
            teamContainer.innerHTML = "";
            teamData.forEach((member, index) => {

                const length = document.createElement("div");
                length.classList.add("length");
                length.innerHTML = `
                    <div class="img-box">
                        <img src="assets/teamimgs/${member.image}.jpg" alt="Team member photo ${member.image}">
                    </div>
                    <div class="info">
                        <h3>Member Name: <br><span>${member.name}</span></h3>
                        <p class="bio">${member.bio}</p>
                    </div>
                `;
                teamContainer.appendChild(length);
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