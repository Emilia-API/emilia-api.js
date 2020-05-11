const Effects = require("./src/apis/Effects");
const Generators = require("./src/apis/Generators");
const Overlays = require("./src/apis/Overlays");
const Greetings = require("./src/apis/Greetings");
const GIFs = require("./src/apis/GIFs");
const Text = require("./src/apis/Text");
const { version } = require("./package.json");

/**
* @class Client
* @classdesc emilia-api.js - Official API wrapper for https://emilia-api.glitch.me
*/
class EmiliaAPI {

  /**
  * @constructor
  * @param {string} token - Your Emilia-api access token
  */
  constructor(token) {
    if (typeof token !== "string") throw new Error("[EMILIA_API_ERROR] Please make sure your token is a string");
    this.baseURL = "https://emilia-api.glitch.me/api";
    this.version = version;
    this.effects = new Effects(token, this.baseURL);
    this.generators = new Generators(token, this.baseURL);
    this.overlays = new Overlays(token, this.baseURL);
    this.greetings = new Greetings(token, this.baseURL);
    this.GIFs = new GIFs(token, this.baseURL);
    this.text = new Text(token, this.baseURL);
  }

}

module.exports = EmiliaAPI;
