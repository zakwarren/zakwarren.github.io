(function () {
  var foreBtn = document.getElementById("foreBtn");
  var backBtn = document.getElementById("backBtn");

  var firstPage = document.getElementById("firstPage");
  var firstPageContent = document.getElementById("firstPageContent");
  var nextPageContent = document.getElementById("nextPageContent");

  var notePages = [
    "<p>Hi, I'm Zak!</p>" +
      "<p>I get computers to do interesting things by developing great software. " +
      "I have a passion for exploring new places, new ideas and solving problems.</p>" +
      "<p>My work has centered around building web apps for wrangling, analyzing, and " +
      "displaying data. I'm also skilled at creating games.</p>",
  ];
  var pageCounter = 0;

  function turnPage(increment) {
    pageCounter = pageCounter + increment;
    displayTurners();

    firstPage.classList.add("page__inner__turn");
    nextPageContent.innerHTML = notePages[pageCounter];

    setTimeout(function () {
      firstPageContent.innerHTML = notePages[pageCounter];
      nextPageContent.innerHTML = "";
      firstPage.classList.remove("page__inner__turn");
    }, 600);
  }

  function displayTurners() {
    foreBtn.style.display = "block";
    backBtn.style.display = "block";
    if (pageCounter === 0) {
      backBtn.style.display = "none";
    }
    if (pageCounter === notePages.length - 1) {
      foreBtn.style.display = "none";
    }
  }

  foreBtn.addEventListener("click", function () {
    turnPage(1);
  });
  backBtn.addEventListener("click", function () {
    turnPage(-1);
  });
  displayTurners();
  firstPageContent.innerHTML = notePages[pageCounter];
})();

(function () {
  var linkDownload = document.getElementById("linkDownload");
  var deferredPrompt;

  function install() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt = null;
      linkDownload.style.display = "none";
    }
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredPrompt = event;

    linkDownload.style.display = "block";
    linkDownload.addEventListener("click", install);
    return false;
  });
})();
