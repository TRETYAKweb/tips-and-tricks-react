import { Tags } from '../Tags';

export const Hero = ({ tipViewMode }) => {
    return (
        <section className = 'hero'>
            <div className = 'title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>
            <Tags tipViewMode = { tipViewMode } />
        </section>
    );
};
