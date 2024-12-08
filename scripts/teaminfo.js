//=========================================teaminfo.html========================================//

document.addEventListener("DOMContentLoaded", () => {
    fetch("teamData.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const bioElements = document.querySelectorAll(".details .bio");

            bioElements.forEach((bioElement, index) => {
                if (data[index]) {
                    bioElement.textContent = data[index].bio;
                }
            });
        })
        .catch(error => {
            console.error("Error fetching team data:", error);
        });
});
