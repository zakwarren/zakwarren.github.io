(function () {
  var foreBtn = document.getElementById("foreBtn");
  var backBtn = document.getElementById("backBtn");

  var firstPage = document.getElementById("firstPage");
  var firstPageContent = document.getElementById("firstPageContent");
  var nextPageContent = document.getElementById("nextPageContent");

  var notePages = [
    "<p>Hi, I'm Zak!</p>" +
      "<p>I get computers to do interesting things by developing great software. " +
      "I have a passion for exploring new places, new ideasand solving problems.</p>",
    "<p>Second page</p><p>Information to display on the second page</p>",
    "<p>Third page</p>",
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
    if (pageCounter === 0) {
      backBtn.style.display = "none";
      foreBtn.style.display = "block";
    } else if (pageCounter === notePages.length - 1) {
      foreBtn.style.display = "none";
      backBtn.style.display = "block";
    } else {
      foreBtn.style.display = "block";
      backBtn.style.display = "block";
    }
  }

  foreBtn.addEventListener("click", function () {
    turnPage(1);
  });
  backBtn.addEventListener("click", function () {
    turnPage(-1);
  });
  displayTurners();
})();
