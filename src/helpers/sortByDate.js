// Хелпер функция для сортировки дат.
export const sortByDate = (a, b) => {
    return new Date(b.created).getMilliseconds() - new Date(a.created).getMilliseconds();
};
