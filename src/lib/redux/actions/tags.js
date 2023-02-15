import { tagTypes } from '../types';

export const tagsActions = Object.freeze({
    setSelectedTagId: (selectedTagId) => {
        return {
            type:    tagTypes.SET_SELECTED_TEG_ID,
            payload: selectedTagId,
        };
    },

});
