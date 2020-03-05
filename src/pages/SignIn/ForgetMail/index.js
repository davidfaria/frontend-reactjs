import React, { useRef, useEffect, useState } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input, Button, Link } from '~/components/Form';
import forgetPassorf from '~/assets/auth/forget_password.png';
import { setFocus } from '~/util/util';
import api from '~/services/api';
import * as S from './styles';
import { toastError, toastSuccess } from '~/util/toast';

import sendMailForget from '~/assets/auth/send_mail_forget.png';

export default function ForgetMail() {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [successSendMail, setSuccessSendMail] = useState(false);

	useEffect(() => {
		setFocus('inputEmail');
	}, []);

	async function handleSubmit(data) {
		try {
			setLoading(true);
			// Remove all previous errors
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				email: Yup.string()
					.email('E-mail inválido')
					.required('E-mail é obrigatório'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			const { email } = data;

			await api.post('/forget', {
				email,
			});

			// console.log('res', res);
			toastSuccess('Solicitação recebida com sucesso');
			setSuccessSendMail(true);
			setLoading(false);
		} catch (err) {
			setSuccessSendMail(false);
			setLoading(false);
			const validationErrors = {};
			if (err instanceof Yup.ValidationError) {
				// Validation failed
				// console.log(err);
				err.inner.forEach(error => {
					validationErrors[error.path] = error.message;
				});
				formRef.current.setErrors(validationErrors);
			} else {
				toastError(
					'Não conseguimos enviar um e-mail de recuperação da senha, Verifique se o e-mail é válido'
				);
			}
		}
	}

	return (
		<>
			{successSendMail && (
				<S.ContainerSuccess>
					<S.Background src={sendMailForget} />
					<S.TitleSuccess>Solicitação recebida</S.TitleSuccess>
					<S.Message>
						Enviamos um link de alteração de senha para seu e-mail. Acesse e
						siga as instruções.
					</S.Message>
				</S.ContainerSuccess>
			)}
			<S.Container>
				<S.Logo src={forgetPassorf} title="Recuperar Senha" />
				<S.Title>Recuperar Senha</S.Title>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						id="inputEmail"
						type="text"
						name="email"
						placeholder="Seu e-mail cadastrado"
						label="E-mail"
					/>
					<Button
						type="submit"
						size="lg"
						label={loading ? 'ENVIANDO PEDIDO...' : 'RECUPERAR SENHA'}
					/>
				</Form>
				<br />
				<Link to="/">Voltar</Link>
			</S.Container>
		</>
	);
}
