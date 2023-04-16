// Core
import { useQueryClient, useMutation } from 'react-query';
import { useSelector } from 'react-redux';

// Instruments
import { api } from '../api';
import { getToken } from '../lib/redux/selectors';
import { IPublishFormShape } from '../components/forms/Types';

export const useCreateTip = () => {
    const client = useQueryClient();
    const token = useSelector(getToken);
    const mutation = useMutation((tip:IPublishFormShape) => {
        return api.createTip(tip, token);
    }, {
        onSettled() {
            void client.invalidateQueries('./tips');
        },
    });

    return mutation;
};
