
import { useQuery } from 'react-query';

import { api } from '../api';
import { ITipModel } from '../types';

export const useTips = () => {
    const query = useQuery<ITipModel[]>('tips', api.getTips);

    const { data, isFetched } = query;

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};

