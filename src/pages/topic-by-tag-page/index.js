import {
    Hero, Nav, TipList,
} from '../../components';

export const TopicByTagPage = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />
                <Hero tipViewMode = 'topic-by-tag' />
                <TipList tipViewMode = 'topic-by-tag' />
            </section>
        </>
    );
};
