// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Instruments
import { api } from '../api';

// Hooks
import { useStore } from './useStore';

export const useSignUp = () => {
    const { authStore } = useStore();
    const { setError, setToken } = authStore;
    const navigate = useNavigate();
    const mutation = useMutation((user) => {
        return api.signUp(user);
    }, {
        onError(error) {
            setError(error?.response?.data?.message);
        },
    });

    useEffect(() => {
        const token = mutation.data?.token;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            setToken(token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
