const ManipulationImages = require('./src/apis/ManipulationImages');

/**
* @class Client
* @classdesc emilia-api.js - An API wrapper for https://emilia-api.glitch.me
*/
class EmiliaAPI {

    /**
     * @author Fatir | Sakuta#2103
     * @constructor
     * @param {String} token - Your Emilia-api access token. 
     */
    constructor(token) {
        if (typeof token !== 'string') throw new Error('[EMILIA_API_ERROR] Please make sure your token is a string');
        this.version = require('./package.json').version;
    }
    
    manipulationImages = new ManipulationImages(token, 'https://emilia-api.glitch.me');
}

module.exports = EmiliaAPI;
