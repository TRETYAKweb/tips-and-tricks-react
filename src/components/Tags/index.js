// Core
import { useContext } from 'react';

// Hooks
import { observer } from 'mobx-react-lite';
import { useStore, useTags } from '../../hooks';

// Helpers
import { getTagIcon, fetchify } from '../../helpers';

export const Tags = observer(({ tipViewMode }) => {
    const { tagStore } = useStore();

    const { selectedById, setSelectedById } = tagStore;

    const { data, isFetched } = useTags();

    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);
        const handleClick = () => setSelectedById(id);

        return (
            <span
                onClick = { handleClick }
                data-active = { selectedById === id || tipViewMode === 'all-topics' } key = { id }
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
});
