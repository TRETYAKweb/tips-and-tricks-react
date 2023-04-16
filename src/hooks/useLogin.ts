// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Instruments
import { AxiosError } from 'axios';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';
import { ILoginFormShape } from '../components/forms/Types';

export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return api.login(credentials);
    }, {
        onError(error: AxiosError) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(authActions.setError('Неверный логин или пароль. Проверьте корректность введённых данных.'));
            } else {
                dispatch(authActions.setError('Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.'));
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const data = mutation.data?.data;
            localStorage.setItem('token', data);
            dispatch(authActions.setToken(data));
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
