import { Nav } from '../../components';
import { LoginForm } from '../../components/forms/LoginForm';

export const LoginPage = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <LoginForm />
        </section>
    );
};
