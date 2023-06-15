// Core
import axios, { AxiosResponse } from 'axios';
import waait from 'waait';
import {
    AuthHeader, ILogin, IProfile, ISignUpWithToken, ITagModel, ITipModel,
} from '../types';
import { ILoginFormShape, IPublishFormShape } from '../components/forms/Types';
import { ISignUp } from '../components/forms/SignUpForm/config';

const ROOT_URL = process.env.REACT_APP_API_URL;

export const api = Object.freeze({
    async getTags(): Promise<ITagModel[]> {
        const { data } = await axios.get<ITagModel[]>(`${ROOT_URL}/tags`);

        return data;
    },
    async getTips(): Promise<ITipModel[]> {
        const { data } = await axios.get<AxiosResponse<ITipModel[]>>(`${ROOT_URL}/tips`);

        return data?.data;
    },
    async getTipById(id: string):Promise<ITipModel> {
        const { data: tipById } = await axios.get<ITipModel>(`${ROOT_URL}/tips/${id}`);

        await waait(0);

        return tipById;
    },
    async signUp(user: ISignUp): Promise<ISignUpWithToken> {
        const { data: newUser } = await axios.post<ISignUp, AxiosResponse<ISignUpWithToken>>(`${ROOT_URL}/auth/registration`, user);

        await waait(0);

        return newUser;
    },

    async login(credentials: ILoginFormShape): Promise<ILogin> {
        const { email, password } = credentials;
        const { data } = await axios.get<ILogin>(`${ROOT_URL}/auth/login`, {
            headers: {
                Authorization: `Basic ${window.btoa(`${email}: ${password}`)}`,
            },
        });

        await waait(0);

        return data;
    },

    async createTip(tip: IPublishFormShape, token?: string) {
        const config: AuthHeader = {};

        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        const { data: newTip } = await axios.post(
            `${ROOT_URL}/tips`,
            tip,
            config,
        );

        await waait(0);

        return newTip;
    },

    async getProfile(token: string): Promise<IProfile> {
        const { data: profile } = await axios.get<IProfile>(`${ROOT_URL}/auth/profile`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        await waait(0);

        return profile;
    },
});
