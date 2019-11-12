const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
* @class Generators
*/
class Generators {

  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }

  /**
    * Draws an image over Pokémon's "It's been 3000 years" meme
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async pokemon3000Years(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/3000-years`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Sends a Minecraft achievement with the text of your choice
    * @param {string} image - A URL to an image
    * @param {string} text - The text for the resulting achievement image
    * @returns {Promise<buffer>}
    */
  async achievement(image, text) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    if (typeof text !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter text or that text isn't a string.");
    const { body } = await get(`${this.baseURL}/achievement`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image, text });
    return body;
  }

  /**
    * A batman slapping meme
    * @param {string} slapper - A URL to an image
    * @param {string} slapped - A URL to an image
    * @returns {Promise<buffer>}
    */
  async batslap(slapper, slapped) {
    if (typeof slapper !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter slapper or that image isn't a string.");
    if (typeof slapped !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter slapped or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/batslap`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ slapper, slapped });
    return body;
  }

  /**
    * Draws a user's avatar over Gravity Falls "Oh, this? This is beautiful." meme
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async beautiful(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/beautiful`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image with the Brazzers logo in the corner
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async brazzers(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/brazzers`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image over Super Smash Bros "Challenger Approaching" screen
    * @param {string} image - A URL to an image
    * @param {boolean} [silhouetted=false] - Whether the image is should be silhouetted
    * @returns {Promise<buffer>}
    */
  async challenger(image, silhouetted = false) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/challenger`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image, silhouetted });
    return body;
  }

  /**
    * Draws an image and the text you specify as a demotivational poster
    * @param {string} title - The title for the poster
    * @param {string} text - The poster description
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async demotivational(title, text, image) {
    if (typeof title !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter title or that title isn't a string.");
    if (typeof text !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter text or that text isn't a string.");
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/demotivational`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ title, text, image });
    return body;
  }

  /**
    * Draws baseImage over overlayImage
    * @param {string} baseImage - A URL to an image
    * @param {string} overlayImage - A URL to an image
    * @returns {Promise<buffer>}
    */
  async fusion(baseImage, overlayImage) {
    if (typeof baseImage !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter baseImage or that image isn't a string.");
    if (typeof overlayImage !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter overlayImage or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/fusion`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ baseImage, overlayImage });
    return body;
  }

  /**
    * Draws "Thug Life" over an image
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async thugLife(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/thug-life`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image with the "To Be Continued..." arrow
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async toBeContinued(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/to-be-continued`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image over a wanted poster
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async wanted(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/wanted`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image over Gravity Falls "Oh, this? This is worthless." meme
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async worthless(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/worthless`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image with the "TRIGGERED" gif
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async triggered(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/triggered`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ image });
    return body;
  }

  /**
    * Sends a "Lisa Presentation" meme with the presentation of your choice
    * @param {string} text - A text for the meme
    * @returns {Promise<buffer>}
    */
  async lisaPresentasion(text) {
    if (typeof text !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter text or that text isn't a string.");
    const { body } = await get(`${this.baseURL}/lisa-presentasion`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ text });
    return body;
  }

  /**
    * Sends a Gru's Plan meme with steps of your choice
    * @param {string} firstStep - The first step of the plan
    * @param {string} secondStep - The second step of the plan
    * @param {string} thirdStep - The second step of the plan
    * @returns {Promise<buffer>}
    */
  async gruPlan(firstStep, secondStep, thirdStep) {
    if (typeof firstStep !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter firstStep or that firstStep isn't a string.");
    if (typeof secondStep !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter secondStep or that secondStep isn't a string.");
    if (typeof thirdStep !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter thirdStep or that thirdStep isn't a string.");
    const { body } = await get(`${this.baseURL}/gru-plan`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper ${version}`)
      .query({ firstStep, secondStep, thirdStep });
    return body;
  }

}

module.exports = Generators;
