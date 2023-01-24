// Core
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { configure } from 'mobx';
import { toast, ToastContainer, Slide } from 'react-toastify';

// Components
import { App } from './App';

// Instruments
import './theme/main.scss';
import 'react-toastify/dist/ReactToastify.css';

// Context Provider
import { queryClient, StoreProvider } from './lib';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <QueryClientProvider client = { queryClient }>
        <ToastContainer newestOnTop transition = { Slide } />
        <StoreProvider>
            <Router>
                <App />
            </Router>
        </StoreProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
    document.getElementById('root'),
);
