import { Nav } from '../../components';
import { PublishTipForm } from '../../components/forms/PublishTipForm';

export const PublishPage = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <PublishTipForm />
        </section>
    );
};
