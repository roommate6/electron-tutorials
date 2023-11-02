class Color {
  #HexaValue;

  constructor(hexaValue) {
    this.#HexaValue = hexaValue;
  }

  get hexaValue() {
    return this.#HexaValue;
  }
  set hexaValue(hexaValue) {
    this.#HexaValue = hexaValue;
  }
}
