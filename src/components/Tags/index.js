// Core
import { useContext } from 'react';

// Helpers
import { getTagIcon } from '../../helpers';
import { Context } from '../../lib/selectedTagContext';

import iconsJson from '../../mock-data/tags.json';

export const Tags = () => {
    const [selectedTagId, setSelectedTagId] = useContext(Context);

    const tagsJSX = iconsJson.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);
        const handleClick = () => setSelectedTagId(id);

        return (
            <span
                onClick = { handleClick }
                data-active = { selectedTagId === id } key = { id }
                className = 'tag'>
                <TagIcon />
                { name }
            </span>
        );
    });


    return (
        <div className = 'tags'>
            { tagsJSX }
        </div>
    );
};
