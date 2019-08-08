const { get } = require("superagent");
const version = require("../../package.json").version; // eslint-disable-line prefer-destructuring

/**
 * @class RandomImages
 */
class RandomImages {
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

    /**
     * @returns {Promise<Buffer>}
     */
    this.tickle = async () => {
      const result = await get(`${url}/api/tickle`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.poke = async () => {
      const result = await get(`${url}/api/poke`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.smug = async () => {
      const result = await get(`${url}/api/smug`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.pat = async () => {
      const result = await get(`${url}/api/pat`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.blush = async () => {
      const result = await get(`${url}/api/blush`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Buffer>}
     */
    this.dance = async () => {
      const result = await get(`${url}/api/dance`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };
  }
}

module.exports = RandomImages;
