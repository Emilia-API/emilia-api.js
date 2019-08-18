const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
* @class Greetings
*/
class Greetings {
  
  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }
  
  /**
  * Greet your user with image
  * @param {Object} options - The options contains the required param
  * @param {string} options.image - A URL to an image
  * @param {string} [options.backgroundImage] - A URL to an image
  * @param {string} options.name - A name
  * @param {string} [options.message] - The message you want to include in your images
  * @param {string} [options.circleColor=#ffffff] - A hex color for the circle rounded in image
  * @param {string} [options.nameColor=#ffffff] - A hex color to change the name color
  * @param {string} [options.messageColor=#ffffff] - A hex color to change for the message
  * @returns {Promise<buffer>}
  */
  async welcome(options = {}) {
    const image = options.image;
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const backgroundImage = options.backgroundImage ? options.backgroundImage : "";
    const name = options.name;
    if (typeof name !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter name or that name isn't a string.");
    const message = options.message ? options.message : "";
    const circleColor = options.circleColor ? options.circleColor : "";
    const nameColor = options.nameColor ? options.nameColor : "";
    const messageColor options.messageColor ? options.messageColor : "";
    const { body } = await get(`${this.baseURL}/greetings`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ type: "welcome", image, backgroundImage, name, message, circleColor, nameColor, messageColor
      });
    return body;
  }
  
  /**
  * Say goodbye to your user with image
  * @param {Object} options - The options contains the required param
  * @param {string} options.image - A URL to an image
  * @param {string} [options.backgroundImage] - A URL to an image
  * @param {string} options.name - A name
  * @param {string} [options.message] - The message you want to include in your images
  * @param {string} [options.circleColor=#ffffff] - A hex color for the circle rounded in image
  * @param {string} [options.nameColor=#ffffff] - A hex color to change the name color
  * @param {string} [options.messageColor=#ffffff] - A hex color to change for the message
  * @returns {Promise<buffer>}
  */
  async farewell(options = {}) {
    const image = options.image;
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const backgroundImage = options.backgroundImage ? options.backgroundImage : "";
    const name = options.name;
    if (typeof name !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter name or that name isn't a string.");
    const message = options.message ? options.message : "";
    const circleColor = options.circleColor ? options.circleColor : "";
    const nameColor = options.nameColor ? options.nameColor : "";
    const messageColor options.messageColor ? options.messageColor : "";
    const { body } = await get(`${this.baseURL}/greetings`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ type: "farewell", image, backgroundImage, name, message, circleColor, nameColor, messageColor
      });
    return body;
  }
}

module.exports = Greetings;
