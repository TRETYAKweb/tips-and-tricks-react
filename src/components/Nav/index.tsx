// Core
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import { getIsSettingsOpen, getToken } from '../../lib/redux/selectors';
import { settingsActions } from '../../lib/redux/actions';
// Icons
import { icons } from '../../theme/icons/nav';
import { useAppDispatch } from '../../lib/redux/init/store';

export const Nav: React.FC = () => {
    const dispatch = useAppDispatch();
    const isSettingsOpen = useSelector(getIsSettingsOpen);

    const token = useSelector(getToken);

    const handleClickSettings = (event: SyntheticEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        dispatch(settingsActions.setSettingsOpen(true));
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


            { !token ? <NavLink to = '/login'>
                <icons.Bolt /> Войти
            </NavLink> : <NavLink to = '/logout'>
                <icons.Bolt /> Выйти
            </NavLink> }

            <NavLink to = '/profile'>
                <icons.Profile /> Профиль
            </NavLink>
        </nav>
    );
};
