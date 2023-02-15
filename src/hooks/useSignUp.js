// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../lib/redux/actions';

// Instruments
import { api } from '../api';

// Hooks

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((user) => {
        return api.signUp(user);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const token = mutation.data?.token;
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
