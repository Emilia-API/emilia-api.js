const ManipulationImages = require("./src/apis/ManipulationImages");
const Others = require("./src/apis/Others");
const RandomImages = require("./src/apis/RandomImages");

/**
 * @class Client
 * @classdesc emilia-api.js - An API wrapper for https://emilia-api.glitch.me
 */
class EmiliaAPI {
  /**
   * @author Fatir | Sakuta#4350
   * @constructor
   * @param {string} token - Your Emilia-api access token.
   */
  constructor(token) {
    if (typeof token !== "string")
      throw new Error(
        "[EMILIA_API_ERROR] Please make sure your token is a string"
      );

    this.baseURL = "https://emilia-api.glitch.me/";
    this.version = require("./package.json").version;
    this.manipulationImages = new ManipulationImages(token, this.baseURL);
    this.randomImages = new RandomImages(token, this.baseURL);
    this.others = new Others(token, this.baseURL);
  }
}

module.exports = EmiliaAPI;
