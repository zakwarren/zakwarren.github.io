let blogModal = document.getElementById("blogModal");
let blogClose = document.getElementById("blogClose");
let blogHeading = document.getElementById("blogHeading");
let blogLink = document.getElementById("blogLink");
let blogBody = document.getElementById("blogBody");

let projectSet = document.getElementsByClassName("project");

const loadBlog = (blogMd) => {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         let mdText = this.responseText;
         let converter = new showdown.Converter();
         let htmlBlog = converter.makeHtml(mdText);
         blogBody.innerHTML = htmlBlog;
      }
   };
   xhttp.open("GET", blogMd, true);
   xhttp.send();
 };

const openModal = (projectId) => {
   for (let i = 0; i < projects.length; i++) {
      if (projects[i].id == projectId) {
         blogHeading.textContent = projects[i].title;
         blogLink.href = projects[i].url;
         //loadBlog(projects[i].blog); // TODO uncomment
         loadBlog("https://raw.githubusercontent.com/zakwarren/cashlesscards/master/README.md"); // TODO remove
      }
   }
   blogModal.classList.remove("modal-hide");
   blogModal.classList.add("modal-show");
};

const closeModal = () => {
   blogModal.classList.remove("modal-show");
   blogModal.classList.add("modal-hide");
   blogBody.innerHTML = "";
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
