// Core
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../hooks';
// Icons
import { icons } from '../../theme/icons/nav';

export const Nav = observer(() => {
    const { settingsStore } = useStore();
    const { isSettingsOpen, toggleSettingsIsOpen } = settingsStore;

    const handleClickSettings = (event) => {
        event.preventDefault();
        toggleSettingsIsOpen(true);
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


            <NavLink to = '/login'>
                <icons.Bolt /> Войти
            </NavLink>

            <NavLink to = '/profile'>
                <icons.Profile /> Профиль
            </NavLink>
        </nav>
    );
});
