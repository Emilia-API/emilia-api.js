const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
 * @class GIFs
 */
class GIFs {

    constructor(token, baseURL) {
        /** @access private */
        this.token = token;
        /** @access private */
        this.baseURL = baseURL;
    }

    /**
	  * Get a random feeding image
	  * @returns {Promise<buffer>}
	  */
    async feed() {
        const { body } = await get(`${this.baseURL}/feed`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random hugging image
	  * @returns {Promise<buffer>}
	  */
    async hug() {
        const { body } = await get(`${this.baseURL}/hug`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random kissing image
	  * @returns {Promise<buffer>}
	  */
    async kiss() {
        const { body } = await get(`${this.baseURL}/kiss`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random slapping image
	  * @returns {Promise<buffer>}
	  */
    async slap() {
        const { body } = await get(`${this.baseURL}/slap`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random tickle image
	  * @returns {Promise<buffer>}
	  */
    async tickle() {
        const { body } = await get(`${this.baseURL}/tickle`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random poke image
	  * @returns {Promise<buffer>}
	  */
    async poke() {
        const { body } = await get(`${this.baseURL}/poke`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random smug image
	  * @returns {Promise<buffer>}
	  */
    async smug() {
        const { body } = await get(`${this.baseURL}/smug`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random pat image
	  * @returns {Promise<buffer>}
	  */
    async pat() {
        const { body } = await get(`${this.baseURL}/pat`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random blush image
	  * @returns {Promise<buffer>}
	  */
    async blush() {
        const { body } = await get(`${this.baseURL}/blush`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random dance image
	  * @returns {Promise<buffer>}
	  */
    async dance() {
        const { body } = await get(`${this.baseURL}/dance`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random crying image
	  * @returns {Promise<buffer>}
	  */
    async cry() {
        const { body } = await get(`${this.baseURL}/cry`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random stare image
	  * @returns {Promise<buffer>}
	  */
    async stare() {
        const { body } = await get(`${this.baseURL}/stare`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random nom image
	  * @returns {Promise<buffer>}
	  */
    async nom() {
        const { body } = await get(`${this.baseURL}/nom`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random hold image
	  * @returns {Promise<buffer>}
	  */
    async hold() {
        const { body } = await get(`${this.baseURL}/hold`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random lick image
	  * @returns {Promise<buffer>}
	  */
    async lick() {
        const { body } = await get(`${this.baseURL}/lick`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random waving image
	  * @returns {Promise<buffer>}
	  */
    async wave() {
        const { body } = await get(`${this.baseURL}/wave`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
	  * Get a random thumbsup image
	  * @returns {Promise<buffer>}
	  */
    async thumbsup() {
        const { body } = await get(`${this.baseURL}/thumbsup`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

}

module.exports = GIFs;
