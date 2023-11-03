const { Color } = require("../classes/color");

class Palette {
  #topBar;
  #subMenu;
  #background;
  #mainBorder;
  #secondBorder;
  #mouseHover;
  #mousePress;
  #text;

  constructor(
    topBar,
    subMenu,
    background,
    mainBorder,
    secondBorder,
    mouseHover,
    mousePress,
    text
  ) {
    this.#topBar = topBar;
    this.#subMenu = subMenu;
    this.#background = background;
    this.#mainBorder = mainBorder;
    this.#secondBorder = secondBorder;
    this.#mouseHover = mouseHover;
    this.#mousePress = mousePress;
    this.#text = text;
  }

  get topBar() {
    return this.#topBar;
  }
  set topBar(topBar) {
    this.#topBar = topBar;
  }

  get subMenu() {
    return this.#subMenu;
  }
  set subMenu(subMenus) {
    this.#subMenu = subMenus;
  }

  get background() {
    return this.#background;
  }
  set background(background) {
    this.#background = background;
  }

  get mainBorder() {
    return this.#mainBorder;
  }
  set mainBorder(mainBorder) {
    this.#mainBorder = mainBorder;
  }

  get secondBorder() {
    return this.#secondBorder;
  }
  set secondBorder(secondBorder) {
    this.#secondBorder = secondBorder;
  }

  get mouseHover() {
    return this.#mouseHover;
  }
  set mouseHover(mouseHover) {
    this.#mouseHover = mouseHover;
  }

  get mousePress() {
    return this.#mousePress;
  }
  set mousePress(mousePress) {
    this.#mousePress = mousePress;
  }

  get text() {
    return this.#text;
  }
  set text(text) {
    this.#text = text;
  }
}

module.exports = {
  Color,
  Palette,
};
