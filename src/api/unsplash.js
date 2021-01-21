import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _hoE2S86-seBYYtBGXHF9Y1RA4YO8FiG_297DyyZO_8'
    }
});