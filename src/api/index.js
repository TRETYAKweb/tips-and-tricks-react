// Core
import axios from 'axios';
import waait from 'waait';

const ROOT_URL = process.env.REACT_APP_API_URL;

export const api = Object.freeze({
    async getTags() {
        const { data } = await axios.get(`${ROOT_URL}/tags`);

        await waait(2000);

        return data;
    },
    async getTips() {
        const { data } = await axios.get(`${ROOT_URL}/tips`);

        await waait(2000);

        return data.data;
    },
});
