const ManipulationImage = require('./src/apis/images');

/**
* @class Client
* @classdesc emilia-api.js - An API wrapper for https://emilia-api.glitch.me
*/
class EmiliaAPI {

    /**
     * @author Fatir | Sakuta#2103
     * @param {String} token The token to pass the authentication api. 
     */
    constructor(token) {

        this.version = require('../../package.json').version;
        this.manipulationImage = new ManipulationImage(token, 'https://emilia-api.glitch.me');
        if (!token) return new Error("[EMILIA_API_ERROR] Missing parameter 'token'");

    }
}

module.exports = EmiliaAPI;
