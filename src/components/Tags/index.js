// Core
import { useContext } from 'react';

// Hooks
import { useTags } from '../../hooks';

// Helpers
import { getTagIcon, fetchify } from '../../helpers';

export const Tags = ({ tipViewMode }) => {
    const {
        data, isFetched, selectedTagId, setSelectedTagId,
    } = useTags();

    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);
        const handleClick = () => setSelectedTagId(id);

        return (
            <span
                onClick = { handleClick }
                data-active = { selectedTagId === id || tipViewMode === 'all-topics' } key = { id }
                className = 'tag'>
                <TagIcon />
                { name }
            </span>
        );
    });


    return (
        <div className = 'tags'>
            { fetchify(isFetched, tagsJSX) }
        </div>
    );
};
