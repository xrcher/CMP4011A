//=========================================goal2.html========================================//

fetch('json/goal2Data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch the JSON data');
        }
        return response.json();
    })
    .then(jsonData => {
        const goalElement = document.createElement('h1');
        goalElement.textContent = jsonData.goal;
        document.getElementById('goal').appendChild(goalElement);

        const overviewElement = document.createElement('p');
        overviewElement.textContent = jsonData.overview;
        document.getElementById('overview').appendChild(overviewElement);

        const progressElement = document.createElement('p');
        progressElement.textContent = jsonData.progress;
        document.getElementById('progress').appendChild(progressElement);

        //keytargets list
        const keyTargetsContainer = document.getElementById('keyTargets');
        jsonData.keyTargets.forEach(target => {

            const targetTitle = document.createElement('h2');
            targetTitle.textContent = target.title;

            const targetDescription = document.createElement('p');
            targetDescription.textContent = target.description;

            //key targets container list creator
            keyTargetsContainer.appendChild(targetTitle);
            keyTargetsContainer.appendChild(targetDescription);
        });

        //footer list
        const footerContainer = document.getElementById('footer');
        jsonData.footer.forEach(footer => {

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
