const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
* @class Generators
*/
class Generators {
	
	constructor(token, b aseURL) {
		/** @access private */
		this.token = token;
		/** @access private */
		this.baseURL = baseURL;
	}
	
	/**
	* Draws an image over Pokémon's "It's been 3000 years" meme
	* @param {String} image - A URL to an image
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
	* @param {String} text - The text for the resulting achievement image
	* @returns {Promise<buffer>}
	*/
	async achievement(text) {
		if (typeof text !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter text or that text isn't a string.");
		const { body } = await get(`${this.baseURL}/achievement`)
		.set("Authorization", `Bearer ${this.token}`)
		.set("User-Agent", `Emilia-API Wrapper ${version}`)
		.query({ text });
		return body;
	}
	
	/**
	* A batman slapping meme
	* @param {String} slapper - A URL to an image
	* @param {String} slapped - A URL to an image
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
	* @param {String} image - A URL to an image
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
	* @param {String} image - A URL to an image
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
	* @param {String} image - A URL to an image
	* @param {Boolean} [silhouetted=false] - Whether the image is should be silhouetted
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
	* @param {String} title - The title for the poster 
	* @param {String} text - The poster description
	* @param {String} image - A URL to an image
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
	* @param {String} baseImage - A URL to an image
	* @padam {String} overlayImage - A URL to an image
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
	* @param {String} image - A URL to an image
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
	* @param {String} image - A URL to an image
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
	* @param {String} image - A URL to an image
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
	* @param {String} image - A URL to an image
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
}

module.exports = Generators;
