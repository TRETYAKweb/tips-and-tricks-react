import {
    Hero, Nav, TipList, Settings,
} from '../../components';

export const AllTopicsPage = () => {
    return (
        <>
            <Settings />
            <section className = 'layout'>
                <Nav />
                <Hero />
                <TipList />
            </section>
        </>
    );
};
