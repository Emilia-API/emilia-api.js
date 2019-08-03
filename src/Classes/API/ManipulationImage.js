const { get } = require('superagent');
const version = require("../../../package.json").version; // eslint-disable-line prefer-destructuring

/**
* @class ManipulationImage
*/
class ManipulationImage {
	
    /**
     * @author Fatir | Sakuta#2103
     * @param {String} token - The token to pass the authentication api. 
     * @param {String} url - Base api url to make a http request.
     */
    constructor(token, url) {
      
             /**
             * @param {String} image - The image to be used
             * @returns {Promise<Buffer>}
             */
            this.pokemon3000Years = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/3000-years/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }

            /**
             * @param {String} text - The text to be used in the returned image results
             * @returns {Promise<Buffer>}
             */
            this.achievement = async (text) => {
                if (!text || typeof text !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/achievement/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ text: text });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used for the background
             * @returns {Promise<Buffer>}
             */
            this.approved = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/approved/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used for the meme
             * @returns {Promise<Buffer>}
             */
            this.beautiful = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/beautiful/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }

            
            /**
             * @param {String} image - The image to be used for the background
             * @returns {Promise<Buffer>}
             */
            this.brazzers = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/brazzers/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used
             * @param {Boolean} silhouetted Whether the image should be silhouetted or no, default to false
             * @returns {Promise<Buffer>}
             */
            this.challenger = async (image, silhouetted = false) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/challenger/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image, silhouetted: silhouetted });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used
             * @param {String} title - The title for poster
             * @param {String} text - The text as the poster description
             * @returns {Promise<Buffer>}
             */
            this.demotivational = async (image, title, text) => {
                if (!image || typeof image !== 'string' || !title || typeof title !== 'string' || !text || typeof text !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image/title/text or that image/title/text isn't a string.");
                let result = await get(`${url}/api/demotivational/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image, title: title, text: text });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used
             * @returns {Promise<Buffer>}
             */
            this.fire = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/fire/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }
            
            /**
             * @param {String} image - The image to be used
             * @returns {Promise<Buffer>}
             */
            this.fusion = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/fusion/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used
             * @returns {Promise<Buffer>}
             */
            this.thugLife = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/thug-life/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }

            /**
             * @param {String} image - The image to be used
             * @returns {Promise<Buffer>}
             */
            this.toBeContinued = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/to-be-continued/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image })
                return result.body;
            }

            /**
             * @param {String} image - The image to be used
             * @returns {Promise<Buffer>}
             */
            this.wanted = async (image) => {
                if (!image || typeof image !== 'string') throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
                let result = await get(`${url}/api/wanted/`)
                .set('Authorization', `Bearer ${token}`)
                .set('User-Agent', `Emilia-API Wrapper ${version}`)
                .query({ image: image });
                return result.body;
            }
    }
}

module.exports = ManipulationImage;
