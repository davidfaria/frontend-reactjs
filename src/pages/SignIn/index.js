import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';
import { Input, Button, Link } from '~/components/Form';
import { signInRequest } from '~/store/actions/auth';

import { Container, Logo, Title, ForgetPassword } from './styles';
import { setFocus } from '~/util/util';

export default function SignIn() {
	const formRef = useRef(null);
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	useEffect(() => {
		// document.getElementById('inputEmail').focus();
		setFocus('inputEmail');
	}, []);

	async function handleSubmit(data) {
		try {
			// Remove all previous errors
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				email: Yup.string()
					.email('E-mail inválido')
					.required('E-mail é obrigatório'),
				password: Yup.string().required('Senha é obrigatória'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
			// Validation passed
			// console.log(data);

			const { email, password } = data;

			dispatch(signInRequest({ email, password }));
		} catch (err) {
			const validationErrors = {};
			if (err instanceof Yup.ValidationError) {
				// Validation failed
				// console.log(err);
				err.inner.forEach(error => {
					validationErrors[error.path] = error.message;
				});
				formRef.current.setErrors(validationErrors);
			}
		}
	}

	return (
		<>
			<Container>
				<Logo src={logo} width="160" title="Crie sua conta gratuitamente" />
				<Title>Nome Empresa</Title>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						id="inputEmail"
						type="text"
						name="email"
						placeholder="exemplo@gmail.com"
						label="E-mail"
					/>
					<ForgetPassword>
						<Input
							type="password"
							name="password"
							placeholder="************"
							label="Senha"
							autoComplete="off"
						/>

						<Link to="forgetMail">Esqueci minha senha</Link>
					</ForgetPassword>

					<Button
						type="submit"
						size="lg"
						label={loading ? 'CARREGANDO...' : 'ENTRAR'}
					/>

					<br />
					{/* <Link to="/register">Criar conta gratuita</Link> */}
				</Form>
				<Link to="/register">Criar conta gratuita</Link>
			</Container>
		</>
	);
}
