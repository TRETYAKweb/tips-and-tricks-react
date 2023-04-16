// Core
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { getIsSettingsOpen } from '../../lib/redux/selectors';
import { settingsActions } from '../../lib/redux/actions/settings';
import { useAppDispatch } from '../../lib/redux/init/store';

// Helpers

export const Settings: React.FC = () => {
    const dispatch = useAppDispatch();
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
