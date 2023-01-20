// Core
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Elements
import { Input } from '../elements';

// Hooks
import { useLogin } from '../../../hooks';

// Other
import { schema } from './config';

export const LoginForm = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = 'publish-tip login'>
            <form onSubmit = { onSubmit }>
                <fieldset disabled = { login.isLoading } >
                    <legend> Залогинится </legend>
                    <Input
                        label = 'Электропочта' error = { form.formState.errors.email }
                        register = { form.register('email') } />

                    <Input
                        label = 'Пароль' type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />

                    <input type = 'submit' value = 'Войти' />
                </fieldset>
                <p>Если у вас до сих пор нет учётной записи, вы можете <Link to = '/signup'>зарегистрироваться</Link></p>
            </form>
        </section>
    );
};
