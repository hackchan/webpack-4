const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "../src", "js", "index.js"),
    precios: path.resolve(__dirname, "../src", "js", "index.js"),
    contacto: path.resolve(__dirname, "../src", "js", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist", "js"),
    filename: "[name].js",
    publicPath: "./dist/"
  }
};
