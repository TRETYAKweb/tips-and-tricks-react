// Core
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { tagsActions } from '../lib/redux/actions';
import { getSelectedTagId } from '../lib/redux/selectors';

// Instruments
import { api } from '../api';

export const useTags = () => {
    const dispatch = useDispatch();
    const selectedTagId = useSelector(getSelectedTagId);

    const setSelectedTagId = (id) => {
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
