const projectGrid = document.getElementById("keyProjects");

const displayProjects = (projects, projectGrid, projectsToDisplay) => {
    let div;
    let img;
    let overlay;
    let title;
    for (let projectId = 0; projectId < projectsToDisplay; projectId++) {
        div = document.createElement("div");
        div.classList.add("project");
        div.classList.add("project-grid__tile");
        div.setAttribute("id", projects[projectId].id);

        img = document.createElement("img");
        img.classList.add("project-image");
        img.setAttribute("src", projects[projectId].image);
        img.setAttribute("alt", projects[projectId].alt);

        overlay = document.createElement("div");
        overlay.classList.add("project-image__overlay");

        title = document.createElement("p");
        title.classList.add("project-title");
        title.textContent = projects[projectId].title;

        div.appendChild(img);
        div.appendChild(overlay);
        overlay.appendChild(title);

        projectGrid.appendChild(div);
    }
}