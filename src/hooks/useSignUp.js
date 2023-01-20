// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Instruments
import { api } from '../api';

export const useSignUp = () => {
    const navigate = useNavigate();
    const mutation = useMutation((user) => {
        return api.signUp(user);
    });

    useEffect(() => {
        const token = mutation.data?.token;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
