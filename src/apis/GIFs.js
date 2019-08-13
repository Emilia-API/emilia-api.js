const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
 * @class GIFs
 */
class GIFs {
	
	constructor(token, baseURL) {
		/**
		* Get a random feeding image
		* @returns {Promise<buffer>}
		*/
		this.feed = async () => {
			const { body } = await get(`${baseURL}/feed`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random hugging image
		* @returns {Promise<buffer>}
		*/
		this.hug = async () => {
			const { body } = await get(`${baseURL}/hug`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random kissing image
		* @returns {Promise<buffer>}
		*/
		this.kiss = async () => {
			const { body } = await get(`${baseURL}/kiss`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random slapping image
		* @returns {Promise<buffer>}
		*/
		this.slap = async () => {
			const { body } = await get(`${baseURL}/slap`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random tickle image
		* @returns {Promise<buffer>}
		*/
		this.tickle = async () => {
			const { body } = await get(`${baseURL}/tickle`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random poke image
		* @returns {Promise<buffer>}
		*/
		this.poke = async () => {
			const { body } = await get(`${baseURL}/poke`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random smug image
		* @returns {Promise<buffer>}
		*/
		this.smug = async () => {
			const { body } = await get(`${baseURL}/smug`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random pat image
		* @returns {Promise<buffer>}
		*/
		this.pat = async () => {
			const { body } = await get(`${baseURL}/pat`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random blush image
		* @returns {Promise<buffer>}
		*/
		this.blush = async () => {
			const { body } = await get(`${baseURL}/blush`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random dance image
		* @returns {Promise<buffer>}
		*/
		this.dance = async () => {
			const { body } = await get(`${baseURL}/dance`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random crying image
		* @returns {Promise<buffer>}
		*/
		this.cry = async () => {
			const { body } = await get(`${baseURL}/cry`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random stare image
		* @returns {Promise<buffer>}
		*/
		this.stare = async () => {
			const { body } = await get(`${baseURL}/stare`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random nom image
		* @returns {Promise<buffer>}
		*/
		this.nom = async () => {
			const { body } = await get(`${baseURL}/nom`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random hold image
		* @returns {Promise<buffer>}
		*/
		this.hold = async () => {
			const { body } = await get(`${baseURL}/hold`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random lick image
		* @returns {Promise<buffer>}
		*/
		this.lick = async () => {
			const { body } = await get(`${baseURL}/lick`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random waving image
		* @returns {Promise<buffer>}
		*/
		this.wave = async () => {
			const { body } = await get(`${baseURL}/wave`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
		
		/**
		* Get a random thumbsup image
		* @returns {Promise<buffer>}
		*/
		this.thumbsup = async () => {
			const { body } = await get(`${baseURL}/thumbsup`)
			.set("Authorization", `Bearer ${token}`)
			.set("User-Agent", `Emilia-API Wrapper ${version}`);
			return body;
		}
	}
}

module.exports = GIFs;
