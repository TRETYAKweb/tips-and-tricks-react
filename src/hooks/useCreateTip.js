// Core
import { useQueryClient, useMutation } from 'react-query';

// Instruments
import { api } from '../api';

export const useCreateTip = () => {
    const client = useQueryClient();
    const mutation = useMutation((tip) => {
        return api.createTip(tip);
    }, {
        onSettled() {
            client.invalidateQueries('./tips');
        },
    });

    return mutation;
};
