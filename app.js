const copyButton = document.querySelector(".copy-button");
const folder = document.querySelector(".folder");
const folderFront = document.querySelector(".folder-front");
const paper = document.querySelector(".paper");
const defaultText = document.querySelector(".default-text");

copyButton.addEventListener("click", function () {
  defaultText.style.transform = "rotateX(180deg)";
  setTimeout(function () {
    defaultText.style.zIndex = "-2";
  }, 500);
  setTimeout(function () {
    defaultText.style.transform = "rotateX(0)";
  }, 600);
  setTimeout(function () {
    defaultText.style.opacity = "0";
  }, 610);
  setTimeout(function () {
    folder.style.transform = "translate(-50%, -50%)";
  }, 650);
  setTimeout(function () {
    folderFront.classList.add("folder-open");
  }, 1200);
  setTimeout(function () {
    paper.classList.add("paper-move");
  }, 1500);
  setTimeout(function () {
    folderFront.classList.remove("folder-open");
  }, 2900);
  setTimeout(function () {
    folder.style.transform = "translate(-50%, -50%) rotateX(90deg)";
    defaultText.innerText = "Copied";
    defaultText.style.backgroundColor = "darkolivegreen";
  }, 3400);
  setTimeout(function () {
    defaultText.style.opacity = "1";
    defaultText.style.transform = "rotateX(180deg)";
  }, 3800);
  setTimeout(function () {
    defaultText.style.zIndex = "1";
  }, 3850);
  setTimeout(function () {
    defaultText.style.transform = "rotateX(0)";
  }, 4150);
});
