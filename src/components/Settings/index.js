// Core
import { useContext } from 'react';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';

// Helpers

export const Settings = observer(() => {
    const { settingsStore } = useStore();
    const { isSettingsIsOpen, toggleSettingsIsOpen } = settingsStore;
    const handleClickBtnSettings = () => toggleSettingsIsOpen(false);

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
});
