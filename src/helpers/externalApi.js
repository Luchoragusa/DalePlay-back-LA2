const axios = require('axios');

let url = 'https://randomuser.me/api/?seed=';
let placeholder = 'https://cdn.discordapp.com/attachments/852889034723426324/1016760215267446865/placeholder.png';

const externalApi = async (seed) => {
    try{
        if (seed !== null) {
            let urlFinal = url + seed;
            let response = await axios.get(urlFinal);
            let urlImage = await response.data.results[0].picture.large;
            return urlImage;
        } else {
            return placeholder;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = externalApi;