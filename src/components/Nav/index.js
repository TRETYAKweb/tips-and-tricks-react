// Core
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Helpers
import { Context } from '../../lib/settingsContext';

// Icons
import { icons } from '../../theme/icons/nav';

export const Nav = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useContext(Context);

    const handleClickSettings = (event) => {
        event.preventDefault();
        setIsSettingsOpen(true);
    };

    return (
        <nav className = 'nav'>
            <h1 className = 'Типсы и Триксы'>T и T</h1>

            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>

            <NavLink to = '/topic-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>

            <NavLink to = '/publish'>
                <icons.Publish /> Опубликовать
            </NavLink>

            <a
                className = { isSettingsOpen ? 'active' : '' } href = '#'
                onClick = { handleClickSettings }>
                <icons.Settings /> Настройки
            </a>
        </nav>
    );
};
