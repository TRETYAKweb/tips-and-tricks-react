// Core
import { useContext } from 'react';

// Hooks
import { useTags } from '../../hooks';

// Helpers
import { getTagIcon, fetchify } from '../../helpers';
import { Context } from '../../lib/selectedTagContext';

export const Tags = ({ tipViewMode }) => {
    const { data, isFetched } = useTags();

    const [selectedTagId, setSelectedTagId] = useContext(Context);

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
