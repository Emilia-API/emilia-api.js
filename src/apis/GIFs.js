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
    * Get a random feeding images
    * @returns {Promise<buffer>}
    */
    async feed() {
        const { body } = await get(`${this.baseURL}/feed`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random hugging images
    * @returns {Promise<buffer>}
    */
    async hug() {
        const { body } = await get(`${this.baseURL}/hug`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random kissing images
    * @returns {Promise<buffer>}
    */
    async kiss() {
        const { body } = await get(`${this.baseURL}/kiss`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random slapping images
    * @returns {Promise<buffer>}
    */
    async slap() {
        const { body } = await get(`${this.baseURL}/slap`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random tickle images
    * @returns {Promise<buffer>}
    */
    async tickle() {
        const { body } = await get(`${this.baseURL}/tickle`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random poke images
    * @returns {Promise<buffer>}
    */
    async poke() {
        const { body } = await get(`${this.baseURL}/poke`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random smug images
    * @returns {Promise<buffer>}
    */
    async smug() {
        const { body } = await get(`${this.baseURL}/smug`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random pat images
    * @returns {Promise<buffer>}
    */
    async pat() {
        const { body } = await get(`${this.baseURL}/pat`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random blush images
    * @returns {Promise<buffer>}
    */
    async blush() {
        const { body } = await get(`${this.baseURL}/blush`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random dance images
    * @returns {Promise<buffer>}
    */
    async dance() {
        const { body } = await get(`${this.baseURL}/dance`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random crying images
    * @returns {Promise<buffer>}
    */
    async cry() {
        const { body } = await get(`${this.baseURL}/cry`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random stare images
    * @returns {Promise<buffer>}
    */
    async stare() {
        const { body } = await get(`${this.baseURL}/stare`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random nom images
    * @returns {Promise<buffer>}
    */
    async nom() {
        const { body } = await get(`${this.baseURL}/nom`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random hold images
    * @returns {Promise<buffer>}
    */
    async hold() {
        const { body } = await get(`${this.baseURL}/hold`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random licking images
    * @returns {Promise<buffer>}
    */
    async lick() {
        const { body } = await get(`${this.baseURL}/lick`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random waving images
    * @returns {Promise<buffer>}
    */
    async wave() {
        const { body } = await get(`${this.baseURL}/wave`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random thumbsup images
    * @returns {Promise<buffer>}
    */
    async thumbsup() {
        const { body } = await get(`${this.baseURL}/thumbsup`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Emilia-API Wrapper ${version}`);
        return body;
    }

    /**
    * Get a random cuddling images
    * @returns {Promise<buffer>}
    */
    async cuddle() {
      const { body } = await get(`${this.baseURL}/cuddle`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random bite images
    * @returns {Promise<buffer>}
    */
    async bite() {
      const { body } = await get(`${this.baseURL}/bite`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random lewd images
    * @returns {Promise<buffer>}
    */
    async lewd() {
      const { body } = await get(`${this.baseURL}/lewd`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random pout images
    * @returns {Promise<buffer>}
    */
    async pout() {
      const { body } = await get(`${this.baseURL}/pout`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random boop images
    * @returns {Promise<buffer>}
    */
    async boop() {
      const { body } = await get(`${this.baseURL}/boop`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random happy images
    * @returns {Promise<buffer>}
    */
    async happy() {
      const { body } = await get(`${this.baseURL}/happy`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random punch images
    * @returns {Promise<buffer>}
    */
    async punch() {
      const { body } = await get(`${this.baseURL}/punch`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random confused images
    * @returns {Promise<buffer>}
    */
    async confused() {
      const { body } = await get(`${this.baseURL}/confused`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random smile images
    * @returns {Promise<buffer>}
    */
    async smile() {
      const { body } = await get(`${this.baseURL}/smile`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random shout images
    * @returns {Promise<buffer>}
    */
    async shout() {
      const { body } = await get(`${this.baseURL}/shout`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random laughing images
    * @returns {Promise<buffer>}
    */
    async laugh() {
      const { body } = await get(`${this.baseURL}/laugh`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random amazed images
    * @returns {Promise<buffer>}
    */
    async amazed() {
      const { body } = await get(`${this.baseURL}/amazed`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random shocked images
    * @returns {Promise<buffer>}
    */
    async shocked() {
      const { body } = await get(`${this.baseURL}/shocked`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random running images
    * @returns {Promise<buffer>}
    */
    async run() {
      const { body } = await get(`${this.baseURL}/run`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random cheer images
    * @returns {Promise<buffer>}
    */
    async cheer() {
      const { body } = await get(`${this.baseURL}/cheer`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random clap images
    * @returns {Promise<buffer>}
    */
    async clap() {
      const { body } = await get(`${this.baseURL}/clap`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random scared images
    * @returns {Promise<buffer>}
    */
    async scared() {
      const { body } = await get(`${this.baseURL}/scared`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }

    /**
    * Get a random suprised images
    * @returns {Promise<buffer>}
    */
    async suprised() {
      const { body } = await get(`${this.baseURL}/suprised`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper`);
      return body;
    }
}

module.exports = GIFs;
