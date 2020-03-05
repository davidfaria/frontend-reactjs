import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/icons/register.png';
import { Input, Button, Link } from '~/components/Form';
import { signUpRequest } from '~/store/actions/auth';
import { btoa } from '~/util/hash';
import * as S from './styles';

export default function SignUp() {
	const formRef = useRef(null);
	const dispatch = useDispatch();
	// const history = useHistory();

	useEffect(() => {
		document.getElementById('inputName').focus();
	}, []);

	async function handleSubmit(data) {
		try {
			// Remove all previous errors
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				name: Yup.string().required('O Nome é obrigatório'),
				email: Yup.string()
					.email('E-mail inválido')
					.required('E-mail é obrigatório'),
				password: Yup.string().required('Senha é obrigatória'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			// Validation passed
			const { name, email, password } = data;
			const emailBase64 = btoa(email);
			const link = `${process.env.REACT_APP_URL_FRONTEND}/confirmActive/${emailBase64}`;
			// console.log({ name, email, password, link });

			dispatch(signUpRequest({ name, email, password, link }));
			// history.push('/confirmSendMail');
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
		<S.Container>
			<S.Logo src={logo} title="Crie sua conta gratuitamente" />
			<S.Title>Crie sua conta gratuitamente</S.Title>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<Input
					id="inputName"
					type="text"
					name="name"
					placeholder="Informe seu nome"
					label="Nome"
				/>
				<Input
					type="text"
					name="email"
					placeholder="Seu melhor E-mail"
					label="E-mail"
				/>
				<Input
					type="password"
					name="password"
					placeholder="Senha de acesso"
					label="Senha"
					autoComplete="off"
				/>
				<Button type="submit" size="lg" label="CRIAR CONTA" />
				<br />
				<Link to="/">Já tenho login</Link>
			</Form>
		</S.Container>
	);
}
