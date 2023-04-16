// Helpers
import { Link } from 'react-router-dom';
import { getTagIcon }  from '../../../helpers/getTagIcon';
import { ITipModel } from '../../../types';

export const Tip: React.FC<IPropTypes> = (props) => {
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
                        <span>🚀 { created }</span>
                        <span>👨🏼&zwj;🚀 Автор: { author }</span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p>{ preview }</p>
            </main>
            <footer>
                <Link to = { id }>📖 &nbsp;Читать полностью →</Link>
            </footer>
        </article>
    );
};

interface IPropTypes extends ITipModel {}
