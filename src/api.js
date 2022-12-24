import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID tjdk8uvAUmFAovCBpQneAnS53ge3wHaBsuXMokIVyb4'
        },
        params: {
            query: 'cars'
        }
    })
    console.log(response);
    return response;
}

export default searchImages;