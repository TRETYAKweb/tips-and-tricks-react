import { icons } from '../../theme/icons/nav';

export const Nav = () => {
    return (
        <nav className = 'nav'>
            <h1 className = 'Типсы и Триксы'>T и T</h1>

            <a href = '#'>
                <icons.Home /> Все темы
            </a>

            <a href = '#'>
                <icons.Tag /> По тэгам
            </a>

            <a href = '#'>
                <icons.Publish /> Опубликовать
            </a>

            <a href = '#'>
                <icons.Settings /> Настройки
            </a>

            <a href = '#'>
                <icons.Bolt /> Войти
            </a>

            <a href = '#'>
                <icons.Profile /> Профиль
            </a>

            <a href = '#'>
                <icons.Logout /> Выйти
            </a>
        </nav>
    );
};
