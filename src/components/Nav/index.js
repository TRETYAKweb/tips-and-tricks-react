// Core
import { useContext } from 'react';

// Helpers
import { Context } from '../../lib/settingsContext';

// Icons
import { icons } from '../../theme/icons/nav';

export const Nav = () => {
    const [_, setIsSettingsOpen] = useContext(Context);

    const handleClickSettings = (event) => {
        event.preventDefault();
        setIsSettingsOpen(true);
    };

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

            <a href = '#' onClick = { handleClickSettings }>
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
