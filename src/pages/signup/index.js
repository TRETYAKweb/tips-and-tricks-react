import { Nav } from '../../components';
import { SignUpForm } from '../../components/forms/SignUpForm';

export const SignUpPage = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <SignUpForm />
        </section>
    );
};
