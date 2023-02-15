// Core
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSettingsOpen } from '../../lib/redux/selectors';
import { settingsActions } from '../../lib/redux/actions/settings';

// Helpers

export const Settings = () => {
    const dispatch = useDispatch();
    const isSettingsIsOpen = useSelector(getIsSettingsOpen);

    const handleClickBtnSettings = () => dispatch(settingsActions.setSettingsOpen(false));

    const settingClasses = cx('settings', {
        open:   isSettingsIsOpen,
        closed: !isSettingsIsOpen,
    });

    return (
        <section className = { settingClasses }>
            <header>
                <h1>Настройки</h1>
            </header>
            <footer>
                <button onClick = { handleClickBtnSettings }>Закрыть</button>
            </footer>
        </section>
    );
};
