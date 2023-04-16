// Core
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { tagsActions } from '../lib/redux/actions';
import { getSelectedTagId } from '../lib/redux/selectors';

// Instruments
import { api } from '../api';
import { useAppDispatch } from '../lib/redux/init/store';

export const useTags = () => {
    const dispatch = useAppDispatch();
    const selectedTagId = useSelector(getSelectedTagId);

    const setSelectedTagId = (id: string) => {
        dispatch(tagsActions.setSelectedTagId(id));
    };

    const query = useQuery('tags', api.getTags);
    const { data, isFetched } = query;

    useEffect(() => {
        if (!selectedTagId && query.data?.length) {
            setSelectedTagId(query.data[ 0 ].id);
        }
    }, [query.data]);

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
        setSelectedTagId,
        selectedTagId,
    };
};
