// Helpers
import { Link } from 'react-router-dom';
import { getTagIcon }  from '../../../helpers/getTagIcon';

export const Tip = (props) => {
    const {
        created, tag, title, preview, author, id,
    } = props;

    const TagIcon = getTagIcon(tag.name);


    return (
        <article>
            <header>
                <TagIcon />
                <h1>{ title }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>๐ { created }</span>
                        <span>๐จ๐ผ&zwj;๐ ะะฒัะพั: { author }</span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p>{ preview }</p>
            </main>
            <footer>
                <Link to = { id }>๐ &nbsp;ะงะธัะฐัั ะฟะพะปะฝะพัััั โ</Link>
            </footer>
        </article>
    );
};
