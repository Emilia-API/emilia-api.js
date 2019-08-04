const { get } = require("superagent");
const version = require("../../package.json").version; // eslint-disable-line prefer-destructuring

/**
 * @class Other
 */
class Others {
  /**
   * @author Fatir | Sakuta#4350
   * @constructor
   * @param {string} token - The token to pass the authentication api.
   * @param {string} url - Base api url to make a http request.
   */
  constructor(token, url) {
    /**
     * @returns {Promise<Object>}
     */
    this.hangman = async () => {
      const result = await get(`${url}/api/hangman`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Array>}
     */
    this.hangmanList = async () => {
      const result = await get(`${url}/api/hangman/list`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };

    /**
     * @returns {Promise<Object>}
     */
    this.randomAnime = async () => {
      const result = await get(`${url}/api/random-anime`)
        .set("Authorization", `Bearer ${token}`)
        .set("User-Agent", `Emilia-API Wrapper ${version}`);
      return result.body;
    };
  }
}

module.exports = Others;
