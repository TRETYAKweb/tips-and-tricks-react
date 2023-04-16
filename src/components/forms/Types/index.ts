import { UseFormRegisterReturn } from 'react-hook-form';

export interface ILoginFormShape {
    email: string;
    password: string;
}

export interface ISignUpFormShape {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface IPublishFormShape {
    title: string;
    preview: string;
    body: string;
    tagId: string;
}

export interface IPropTypes {
    placeholder?: string;
    type?: string;
    tag?: string;
    label: string;
    register: UseFormRegisterReturn;
    error?: {
        message?: string;
    };
    options?: {
        value:string;
        name:string;
    }[];
}
