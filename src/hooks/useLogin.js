// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Instruments
import { api } from '../api';
import { useStore } from './useStore';

export const useLogin = () => {
    const { authStore } = useStore();
    const { setError, setToken } = authStore;
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.login(credentials);
    }, {
        onError(error) {
            setError(error?.response?.data?.message);
        },
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            setToken(token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
