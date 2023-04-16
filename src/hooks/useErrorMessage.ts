import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getErrorMessage } from '../lib/redux/selectors';

import { toastOptions } from '../constants/toastOptions';
import { authActions } from '../lib/redux/actions/auth';
import { useAppDispatch } from '../lib/redux/init/store';

export const useErrorMessage = () => {
    const errorMessage = useSelector(getErrorMessage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);
            dispatch(authActions.resetError());
        }
    }, [errorMessage]);
};
