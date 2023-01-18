import { useQuery } from 'react-query';
import { api } from '../api';

export const useTipById = (id) => {
    const query = useQuery(['tips', id], () => api.getTipById(id));

    return query;
};
