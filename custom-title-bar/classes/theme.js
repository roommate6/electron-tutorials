class Theme {
  #palette;

  constructor(palette) {
    this.#palette = palette;
  }

  get palette() {
    return this.#palette;
  }
  set palette(palette) {
    this.#palette = palette;
  }
}
