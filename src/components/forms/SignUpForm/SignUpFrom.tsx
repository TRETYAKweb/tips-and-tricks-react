// Core
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Elements
import { Input } from '../elements';

// Hooks
import { useSignUp } from '../../../hooks';

// Other
import { schema } from './config';
import { ISignUpFormShape } from '../Types';

export const SignUpForm: React.FC = () => {
    const signUp = useSignUp();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data: ISignUpFormShape) => {
        const { confirmPassword, ...newUser } = data;
        await signUp.mutateAsync(newUser);
        form.reset();
    });

    return (
        <section className = 'publish-tip signup'>
            <form onSubmit = { onSubmit }>
                <fieldset disabled = { signUp.isLoading } >
                    <legend> Залогинится </legend>
                    <Input
                        label = 'Имя и фамилия' error = { form.formState.errors.name }
                        register = { form.register('name') } />

                    <Input
                        label = 'Электропочта' error = { form.formState.errors.email }
                        register = { form.register('email') } />

                    <Input
                        label = 'Пароль' type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />

                    <Input
                        label = 'Подтверждения пароля' type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />

                    <input type = 'submit' value = 'Зарегистрироваться' />
                </fieldset>
                <p>Перейти к <Link to = '/login'>логину</Link></p>
            </form>
        </section>
    );
};
