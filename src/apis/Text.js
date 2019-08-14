const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
 * @class Text
 */
class Text {
	
	constructor(token, baseURL) {
		/** @access private */
		this.token = token;
		/** @access private */
		this.baseURL = baseURL;
	}
	
	/**
	* A random word, most used for hangman
	* @returns {Promise<hangmanResponse>}
	*/
	async hangman() {
		const { body } = await get(`${this.baseURL}/hangman`)
		.set("Authorization", `Bearer ${this.token}`)
		.set("User-Agent", `Emilia-API Wrapper ${version}`);
		return body;
	}
	
	/**
	* Get a random anime from https://randomanime.org
	* @returns {Promise<randomAnimeResponse>}
	*/
	async randomAnime() {
		const { body } = await get(`${this.baseURL}/random-anime`)
		.set("Authorization", `Bearer ${this.token}`)
		.set("User-Agent", `Emilia-API Wrapper ${version}`);
		return body;
	}
}

module.exports = Text;

/**
* @typedef {Object} hangmanResponse - The response for text.hangman
* @prop {String} word - The random word
*
* @typedef {Object} randomAnimeResponse - The response for text.randomAnime
* @prop {Array} details - The details of resulting anime
* @prop {String} thumbnail - The thumbnail URL
* @prop {String} description - The description of resulting anime
*/
