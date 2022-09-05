const axios = require('axios');

let url = 'https://randomuser.me/api/?seed=';

const externalApi = async (seed) => {
    try{
        let urlFinal = url + seed;
        let response = await axios.get(urlFinal);
        let urlImage = await response.data.results[0].picture.large;
        return urlImage;
    } catch (error) {
        console.log(error);
    }
}

module.exports = externalApi;