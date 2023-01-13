// Core
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';
import { Context } from '../lib/selectedTagContext';

export const useTags = () => {
    const [selectedTagId, setSelectedTagId] = useContext(Context);
    const query = useQuery('tags', api.getTags);
    const { data, isFetched } = query;

    useEffect(() => {
        if (!selectedTagId && Array.isArray(data) && data.length) {
            setSelectedTagId(data[ 0 ].id);
        }
    }, [data]);

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};
