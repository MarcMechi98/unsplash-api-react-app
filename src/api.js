import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID tjdk8uvAUmFAovCBpQneAnS53ge3wHaBsuXMokIVyb4'
        },
        params: {
            query: term
        }
    })

    return response.data.results;
}

export default searchImages;