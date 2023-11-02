// singleton.js

let instance;

function init() {
  // Private variables and methods
  let data = "#FFFFFF";

  return {
    // Public methods and variables
    getData: function () {
      return data;
    },
  };
}

module.exports = {
  getSingletonInstance: function () {
    if (!instance) {
      instance = init();
    }
    return instance;
  },
};
