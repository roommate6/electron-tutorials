class Palette {
  #topBar;
  #subMenu;
  #background;
  #border;
  #mouseHover;
  #mousePress;
  #text;

  constructor(
    topBar,
    subMenu,
    background,
    border,
    mouseHover,
    mousePress,
    text
  ) {
    this.#topBar = topBar;
    this.#subMenu = subMenu;
    this.#background = background;
    this.#border = border;
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

  get border() {
    return this.#border;
  }
  set border(border) {
    this.#border = border;
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
