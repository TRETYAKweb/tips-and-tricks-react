// Core
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, Slide } from 'react-toastify';

// Components
import { App } from './App';

// Instruments
import './theme/main.scss';
import 'react-toastify/dist/ReactToastify.css';

// Context Provider
import { queryClient } from './lib/queryClient';

import { store } from './lib/redux/init/store';


render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <ToastContainer newestOnTop transition = { Slide } />
            <Router>
                <App />
            </Router>
            <ReactQueryDevtools initialIsOpen = { false } />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);
