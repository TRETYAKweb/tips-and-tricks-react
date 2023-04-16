import { Nav } from '../../components';
import { LoginForm } from '../../components/forms/LoginForm';

export const LoginPage: React.FC = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <LoginForm />
        </section>
    );
};
