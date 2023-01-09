import { getTagIcon } from '../../helpers';

import iconsJson from '../../mock-data/tags.json';

export const Tags = () => {
    const tagsJSX = iconsJson.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        return (
            <span
                data-active = { true } key = { id }
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
