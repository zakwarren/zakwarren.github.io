const projects = [
    {
        "title": "Activities Club Website",
        "url": "https://github.com/zakwarren/activitiesclub",
        "image": "images/activitiesclub.jpg",
        "alt": "Activities Club Website"
    },
    {
        "title": "Albie Adventures Game",
        "url": "https://www.sharemygame.com/share/484b2062-4881-47c1-bb65-efab8a04e49b",
        "image": "images/albieadventures.png",
        "alt": "Albie Adventures Game"
    },
    {
        "title": "Cashless Cards System",
        "url": "https://github.com/zakwarren/cashlesscards",
        "image": "images/cashlesscards.jpg",
        "alt": "Cashless Cards System"
    }
];
const projectsToDisplay = 3;

const projectGrid = document.getElementById("keyProjects");

const displayProjects = (projects, projectGrid, projectsToDisplay) => {
    let url;
    let img;
    let overlay;
    let title;
    for (let projectId = 0; projectId < projectsToDisplay; projectId++) {
        url = document.createElement("a");
        url.classList.add("project");
        url.classList.add("project-grid__tile");
        url.setAttribute("href", projects[projectId].url);
        url.setAttribute("target", "_blank");

        img = document.createElement("img");
        img.classList.add("project-image");
        img.setAttribute("src", projects[projectId].image);
        img.setAttribute("alt", projects[projectId].alt);

        overlay = document.createElement("div");
        overlay.classList.add("project-image__overlay");

        title = document.createElement("p");
        title.classList.add("project-title");
        title.textContent = projects[projectId].title;

        url.appendChild(img);
        url.appendChild(overlay);
        overlay.appendChild(title);

        projectGrid.appendChild(url);
    }
}

displayProjects(projects, projectGrid, projectsToDisplay);