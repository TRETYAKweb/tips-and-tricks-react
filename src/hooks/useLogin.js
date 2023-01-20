// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Instruments
import { api } from '../api';

export const useLogin = () => {
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.login(credentials);
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
