// Core
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsSettingsOpen, getToken } from '../../lib/redux/selectors';
import { settingsActions } from '../../lib/redux/actions';
// Icons
import { icons } from '../../theme/icons/nav';

export const Nav = () => {
    const dispatch = useDispatch();
    const isSettingsOpen = useSelector(getIsSettingsOpen);

    const handleClickSettings = (event) => {
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


            <NavLink to = '/login'>
                <icons.Bolt /> Войти
            </NavLink>

            <NavLink to = '/profile'>
                <icons.Profile /> Профиль
            </NavLink>
        </nav>
    );
};
