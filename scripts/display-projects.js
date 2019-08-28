const projectGrid = document.getElementById("keyProjects");

const displayProjects = (projects, projectGrid, projectsToDisplay, isLink) => {
    let url;
    let img;
    let overlay;
    let title;
    for (let projectId = 0; projectId < projectsToDisplay; projectId++) {
        url = document.createElement("a");
        url.classList.add("project");
        url.classList.add("project-grid__tile");
        url.setAttribute("id", projects[projectId].id);
        if (isLink) {
            url.setAttribute("href", projects[projectId].url);
            url.setAttribute("target", "_blank");
        }

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