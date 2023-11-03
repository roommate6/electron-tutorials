const { Color, Palette } = require("../classes/palette");

class Theme {
  #palette;

  constructor() {
    this.#palette = new Palette(
      new Color("#0B090A"),
      new Color("#161A1D"),
      new Color("#242A2F"),
      new Color("#0B090A"),
      new Color("#3B4349"),
      new Color("#E5383B"),
      new Color("#BA181B"),
      new Color("#F5F3F4")
    );
  }

  get palette() {
    return this.#palette;
  }
  set palette(palette) {
    this.#palette = palette;
  }
}

module.exports = {
  Color,
  Palette,
  Theme,
};
