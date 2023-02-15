import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getErrorMessage } from '../lib/redux/selectors';

import { toastOptions } from '../constants/toastOptions';
import { authActions } from '../lib/redux/actions/auth';

export const useErrorMessage = () => {
    const errorMessage = useSelector(getErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);
            dispatch(authActions.resetError());
        }
    }, [errorMessage]);
};
