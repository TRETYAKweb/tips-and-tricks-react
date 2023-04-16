import {
    Hero, Nav, TipList,
} from '../../components';

export const AllTopicsPage: React.FC = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />
                <Hero tipViewMode = 'all-topics' />
                <TipList tipViewMode = 'all-topics' />
            </section>
        </>
    );
};
