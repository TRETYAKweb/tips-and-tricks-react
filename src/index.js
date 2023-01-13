// Core
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Components
import { App } from './App';

// Instruments
import './theme/main.scss';

// Context Provider
import { SelectedTagProvider, SettingsProvider, queryClient } from './lib';

render(
    <QueryClientProvider client = { queryClient }>
        <SettingsProvider>
            <SelectedTagProvider>
                <App />
            </SelectedTagProvider>
        </SettingsProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
    document.getElementById('root'),
);
