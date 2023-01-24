// Core
import { useEffect } from 'react';
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';
import { useStore } from './useStore';

export const useTags = () => {
    const { tagStore } = useStore();

    const { setSelectedById, selectedById } = tagStore;

    const query = useQuery('tags', api.getTags);
    const { data, isFetched } = query;

    useEffect(() => {
        if (!selectedById && Array.isArray(data) && data.length) {
            tagStore.setSelectedById(data[ 0 ].id);
            tagStore.setSelectedByName(data[ 0 ].name);
        }
    }, [data]);

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};
