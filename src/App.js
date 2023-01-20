// Core
// Components
import {
    Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { Settings } from './components';
import {
    AllTopicsPage, TopicByTagPage, TipByIdPage, PublishPage, LoginPage, SignUpPage,
} from './pages';


export const App = () => {
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
};
