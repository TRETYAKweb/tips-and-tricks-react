import { useQuery } from 'react-query';
import { api } from '../api';
import { ITipModel } from '../types';

export const useTipById = (id: string) => {
    const query = useQuery<ITipModel>(['tips', id], () => api.getTipById(id));

    return query;
};
