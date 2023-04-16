import { Nav } from '../../components';
import { PublishTipForm } from '../../components/forms/PublishTipForm';

export const PublishPage: React.FC = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <PublishTipForm />
        </section>
    );
};
