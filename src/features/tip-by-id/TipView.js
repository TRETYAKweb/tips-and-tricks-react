import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchify, getTagIcon, formatDate } from '../../helpers';
import { useTipById } from '../../hooks';


export const TipView = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data:tipToView, isFetchedAfterMount } = useTipById(params.id);


    useEffect(() => {
        if (!tipToView && isFetchedAfterMount) {
            navigate('..', { replace: true });
        }
    }, [tipToView, isFetchedAfterMount]);

    const TagIcon = getTagIcon(tipToView?.tag?.name);

    const goBack = () => navigate('..');

    return <>
        <article>
            <header>
                <TagIcon />
                <h1>{ fetchify(isFetchedAfterMount, tipToView?.title) }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>
                        🚀 { fetchify(isFetchedAfterMount, formatDate(tipToView?.created)) }
                        </span>
                        <span>
                        👨🏼&zwj;🚀 Автор: { fetchify(isFetchedAfterMount, tipToView?.author) }
                        </span>
                    </div>
                </time>
            </main>
            <footer>
                <a onClick = { goBack }>←&nbsp;Назад</a>
            </footer>
        </article>
        <main>{ fetchify(isFetchedAfterMount, tipToView?.body) }</main>
    </>;
};
