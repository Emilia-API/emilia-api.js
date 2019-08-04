const { get } = require("superagent");
const version = require("../../package.json").version; // eslint-disable-line prefer-destructuring

/**
 * @class RandomImage
 */
class RandomImage {
  /**
   * @author Fatir | Sakuta#4350
   * @constructor
   * @param {string} token - The token to pass the authentication api.
   * @param {string} url - Base api url to make a http request.
   */
  constructor(token, url) {
    /**
     * @returns {Promise<Buffer>}
     */
    this.feed = async () => {
      const result = await get(`${url}/api/feed`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.hug = async () => {
      const result = await get(`${url}/api/hug`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.kiss = async () => {
      const result = await get(`${url}/api/kiss`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.slap = async () => {
      const result = await get(`${url}/api/slap`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };
  }
}

module.exports = RandomImage;
