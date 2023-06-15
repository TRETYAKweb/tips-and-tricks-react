// Core

// Hooks
import { useTags } from '../../hooks';

// Helpers
import { getTagIcon, fetchify } from '../../helpers';
import { TipViewMode } from '../../types';

type Props = {
    tipViewMode: TipViewMode
};

export const Tags: React.FC<Props> = ({ tipViewMode }) => {
    const {
        data, isFetched, selectedTagId, setSelectedTagId,
    } = useTags();

    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);
        const handleClick = () => setSelectedTagId(id);

        return (
            <span
                role = 'listitem'
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
            { fetchify(isFetched, tagsJSX || []) }
        </div>
    );
};
