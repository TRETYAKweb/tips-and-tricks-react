import { ReactElement } from 'react';

type ContentType = string | undefined | null | ReactElement[];

export const fetchify = (isFetched: boolean, content: ContentType) => {
    if (!isFetched) {
        return <h3>Загрузка...</h3>;
    }

    if (content) {
        return content;
    }

    return null;
};
