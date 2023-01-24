import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { fetchify, getTagIcon } from '../../helpers';
import { useStore, useTags } from '../../hooks';

export const TagsAsaide = observer(() => {
    const { tagStore } = useStore;
    const { setSelectedTagId } = tagStore;
    const { data:tags, isFetched } = useTags();

    const tagsJSX = tags?.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        return (
            <Link to = '/topics-by-tag' key = { id } >
                <span
                    className = 'tag'
                    key = { id }
                    data-active = { false }
                    onClick = { () => setSelectedTagId(id) }>
                    <TagIcon />
                    { name }
                </span>
            </Link>
        );
    });

    return (
        <aside className = 'tags-aside'>
            <h1>Теги</h1>
            <div>{ fetchify(isFetched, tagsJSX) }</div>
        </aside>
    );
});
