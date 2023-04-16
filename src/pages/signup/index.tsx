import { Nav } from '../../components';
import { SignUpForm } from '../../components/forms/SignUpForm';

export const SignUpPage: React.FC = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <SignUpForm />
        </section>
    );
};
