// Core
import { render } from 'react-dom';

// Components
import { App } from './App';

// Instruments
import './theme/main.scss';

// Context Provider
import { SelectedTagProvider, SettingsProvider } from './lib';

render(
    <SelectedTagProvider>
        <App />
    </SelectedTagProvider>,
    document.getElementById('root'),
);
