const { ImageManipulation } = require('./API/Image-Manipulation');

/**
* @class Client
* @classdesc emilia-api.js - An API wrapper for https://emilia-api.glitch.me
*/
class Client {
    /**
     * @author Fatir | Sakuta#2103
     * @param {String} token The token to pass the authentication api. 
     */
    constructor(token) {

        this.author = "Fatir";
        this.version = require('../../package.json').version;
        this.image = new ImageManipulation(token, 'https://emilia-api.glitch.me');
        if (!token) return new Error("[EMILIA_API_ERROR] Missing parameter 'token'");

    }
}

module.exports = { Client };
