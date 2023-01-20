// Core
import axios from 'axios';
import waait from 'waait';

const ROOT_URL = process.env.REACT_APP_API_URL;

export const api = Object.freeze({
    async getTags() {
        const { data } = await axios.get(`${ROOT_URL}/tags`);

        return data;
    },
    async getTips() {
        const { data } = await axios.get(`${ROOT_URL}/tips`);

        return data.data;
    },
    async getTipById(id) {
        const { data: tipById } = await axios.get(`${ROOT_URL}/tips/${id}`);

        await waait(2000);

        return tipById;
    },
    async signUp(user) {
        const { data: newUser } = await axios.post(`${ROOT_URL}/auth/registration`, user);

        await waait(2000);

        return newUser;
    },

    async login(credentials) {
        const { email, password } = credentials;
        const { data } = await axios.get(`${ROOT_URL}/auth/login`, {
            headers: {
                Authorization: `Basic ${window.btoa(`${email}: ${password}`)}`,
            },
        });

        await waait(2000);

        return data;
    },

    async createTip(tip) {
        const { data: newTip } = await axios.post(`${ROOT_URL}/tips`, tip);

        await waait(2000);

        return newTip;
    },
});
