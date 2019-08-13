const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
 * @class Text
 */
class Text {
	
	constructor(token, url) {
		
		/**
		* A random word, most used for hangman
		* @returns {Promise<object>}
		*/
		this.hangman = async () => {
			const { body } = await get(`${url}/hangman`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random anime from https://randomanime.org
		* @returns {Promise<object>}
		*/
		this.randomAnime = async () => {
			const { body } = await get(`${url}/random-anime`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
	}
}

module.exports = Text;
