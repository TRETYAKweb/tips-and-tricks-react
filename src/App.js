// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {
    Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { toast } from 'react-toastify';
// Components
import { Settings } from './components';
import { useStore } from './hooks';
import {
    AllTopicsPage, TopicByTagPage, TipByIdPage, PublishPage, LoginPage, SignUpPage,
} from './pages';


export const App = observer(() => {
    const { authStore } = useStore();
    const { errorMessage, resetError } = authStore;

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       5000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });

            notify();

            // необходимо очистить состояние ошибки чтобы
            //  при повторном возникновении такой же ошибки появилось
            //  всплывающиее сообщение

            resetError();
        }
    }, [errorMessage]);

    return (
        <>
            <Settings />

            <Routes>

                <Route path = '/all-topics' element = { <Outlet /> }>

                    <Route path = '/' element = { <AllTopicsPage /> } />
                    <Route path = ':id' element = { <TipByIdPage /> } />

                </Route>

                <Route path = '/topic-by-tag' element = { <Outlet /> }>

                    <Route path = '/' element = { <TopicByTagPage /> } />
                    <Route path = ':id' element = { <TipByIdPage /> } />

                </Route>

                <Route path = '/publish' element = { <PublishPage /> } />
                <Route path = '/login' element = { <LoginPage /> } />
                <Route path = '/signUp' element = { <SignUpPage /> } />

                <Route path = '*' element = { <Navigate to = '/all-topics' replace /> } />

            </Routes>
        </>
    );
});
