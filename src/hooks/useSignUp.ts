// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../lib/redux/actions';

// Instruments
import { api } from '../api';
import { useAppDispatch } from '../lib/redux/init/store';
import { ISignUpFormShape } from '../components/forms/Types';

// Hooks

export const useSignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((user:ISignUpFormShape) => {
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
