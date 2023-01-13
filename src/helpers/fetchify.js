export const fetchify = (isFetched, content) => {
    if (!isFetched) {
        return <h3>Загрузка...</h3>;
    }

    if (content) {
        return content;
    }

    return null;
};
