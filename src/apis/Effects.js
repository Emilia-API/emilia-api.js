const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
* @class Effects
*/
class Effects {
	
	constructor(token, baseURL) {
		
		/**
		* Draws an image but distorted
		* @param {String} image - A URL to an image
		* @param {Number} [level=1] - The level of distorted
		* @returns {Promise<buffer>}
		*/
		this.distort = async (image, level = 1) => {
			if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
			const { body } = await get(`${baseURL}/distort`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`)
			.query({ image, level });
			return body;
		}
		
		/**
		* Draws a fiery border over an image
		* @param {String} image - A URL to an image
		* @returns {Promise<buffer>}
		*/
		this.fire = async image => {
			if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
			const { body } = await get(`${baseURL}/fire`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`)
			.query({ image });
			return body;
		}
		
		/**
		* Draws a fiery border over an image
		* @param {String} image - A URL to an image
		* @returns {Promise<buffer>}
		*/
		this.sepia = async image => {
			if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
			const { body } = await get(`${baseURL}/sepia`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`)
			.query({ image });
			return body;
		}
		
	}
}

module.exports = Effects;
