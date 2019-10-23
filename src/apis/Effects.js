const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
 * @class Effects
 */
class Effects {

  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }

  /**
    * Draws an image but distorted
    * @param {string} image - A URL to an image
    * @param {number} [level=1] - The level of distorted
    * @returns {Promise<buffer>}
    */
  async distort(image, level = 1) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/distort`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image, level });
    return body;
  }

  /**
    * Draws a fiery border over an image
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async fire(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/fire`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws a fiery border over an image
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async sepia(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/sepia`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

}

module.exports = Effects;
