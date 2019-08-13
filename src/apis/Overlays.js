const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
* @class Overlays
*/
class Overlays {
	
	constructor(token, baseURL) {
		
		/**
		* Draws a "approved" stamp over an image
		* param {String} image - A URL to an image
		*/
		this.approved = async image => {
			if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
			const { body } = await get(`${baseURL}/approved`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`)
			.query({ image });
			return body;
		}
		
		/**
		* Draws a "rejected" stamp over an image
		* param {String} image - A URL to an image
		*/
		this.rejected = async image => {
			if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
			const { body } = await get(`${baseURL}/rejected`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`)
			.query({ image });
			return body;
		}
	}
}

module.exports = Overlays;
