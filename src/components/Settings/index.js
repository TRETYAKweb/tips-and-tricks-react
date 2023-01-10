// Core
import { useContext } from 'react';
import cx from 'classnames';

// Helpers
import { Context } from '../../lib/settingsContext';

export const Settings = () => {
    const [isSettingsOpen, setisSettingsOpen] = useContext(Context);
    const handleClickBtnSettings = () => setisSettingsOpen(false);

    const settingClasses = cx('settings', {
        open:   isSettingsOpen,
        closed: !isSettingsOpen,
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
