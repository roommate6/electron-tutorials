const { Color, Palette, Theme } = require("../classes/theme");

let instance;

module.exports = {
  Color,
  Palette,
  Theme,
  getSingletonInstance: () => {
    if (!instance) {
      instance = new Theme();
    }
    return instance;
  },
};
