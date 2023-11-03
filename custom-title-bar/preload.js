const {
  getSingletonInstance,
  Color,
  Palette,
  Theme,
} = require("./state_trackers/guiState");

window.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");
  const titleBarContainer = document.getElementById("title-bar-container");
  const mainButtons = document.getElementsByClassName("main-button");
  const leftMenu = document.getElementById("left-menu");

  mainContainer.style.backgroundColor =
    getSingletonInstance().palette.background.hexaValue;
  mainContainer.style.color = getSingletonInstance().palette.text.hexaValue;
  mainContainer.style.borderColor =
    getSingletonInstance().palette.mainBorder.hexaValue;

  titleBarContainer.style.backgroundColor =
    getSingletonInstance().palette.topBar.hexaValue;
  titleBarContainer.style.borderBottomColor =
    getSingletonInstance().palette.secondBorder.hexaValue;

  for (var i = 0; i < mainButtons.length; ++i) {
    mainButtons[i].addEventListener("mouseover", function () {
      this.style.backgroundColor =
        getSingletonInstance().palette.mouseHover.hexaValue;
    });
    mainButtons[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });
    mainButtons[i].addEventListener("mousedown", function () {
      this.style.backgroundColor =
        getSingletonInstance().palette.mousePress.hexaValue;
    });
    mainButtons[i].addEventListener("mouseup", function () {
      this.style.backgroundColor =
        getSingletonInstance().palette.mouseHover.hexaValue;
    });
  }

  leftMenu.style.backgroundColor =
    getSingletonInstance().palette.subMenu.hexaValue;
});
