// Helpers
import { getTagIcon }  from '../../../helpers/getTagIcon';

export const Tip = (props) => {
    const {
        created, tag, title, preview, author,
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
                <a href = '/tips-and-tricks/all-topics/cb0cb04e-e45e-4a56-8b88-b75fa36f0f07'>📖 &nbsp;Читать полностью →</a>
            </footer>
        </article>
    );
};
