let blogModal = document.getElementById("blogModal");
let blogClose = document.getElementById("blogClose");
let blogHeading = document.getElementById("blogHeading");
let blogBody = document.getElementById("blogBody");
let blogLink = document.getElementById("blogLink");

let projectSet = document.getElementsByClassName("project");

const openModal = (projectId) => {
   for (let i = 0; i < projects.length; i++) {
      if (projects[i].id == projectId) {
         blogHeading.textContent = projects[i].title;
         blogLink.href = projects[i].url;
      }
   }
   blogModal.classList.remove("modal-hide");
   blogModal.classList.add("modal-show");
};

const closeModal = () => {
   blogModal.classList.remove("modal-show");
   blogModal.classList.add("modal-hide");
};

window.onclick = (event) => {
   if (event.target == blogModal) {
      closeModal();
   }
}

blogClose.onclick = closeModal;

for(let i = 0; i < projectSet.length; i++) {
   projectSet[i].onclick = () => {
      openModal(projectSet[i].id);
   };
}


//let mdFile = new XMLHttpRequest();
//mdFile.open("GET", "blogs/test.md", true);
//mdFile.onreadystatechange = () => {
//   if (mdFile.readyState === 4 && mdFile.status === 200)   
//   {
//      let mdText = mdFile.responseText; 
//      let converter = new showdown.Converter();
//      converter.makeHtml(mdText);
//      console.log(converter);
//   }
//}