import { AnyAction } from 'redux';

import { tagTypes } from '../types';

const initialState = {
    selectedTagId: null,
};

export const tagsReducer = (state = initialState, action:AnyAction) => {
    switch (action.type) {
        case tagTypes.SET_SELECTED_TEG_ID: {
            return { ...state, selectedTagId: action.payload };
        }
        default: {
            return state;
        }
    }
};
