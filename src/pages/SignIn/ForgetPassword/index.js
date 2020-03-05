import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { resetPasswordRequest } from '~/store/actions/auth';
import { Input, Button, ButtonLink } from '~/components/Form';
import { setFocus } from '~/util/util';
import { toastError } from '~/util/toast';
import colors from '~/styles/colors';
import * as S from './styles';

import imgSuccessPassword from '~/assets/auth/success_password_reset.svg';
import passwordReset from '~/assets/auth/password_reset.png';

export default function ForgetPassword() {
	const { forget } = useParams();
	const formRef = useRef(null);
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);
	const [successPasswordReset, setSuccessPasswordReset] = useState(false);

	useEffect(() => {
		setFocus('InputPassword');
	}, []);

	async function handleSubmit(data) {
		try {
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				password: Yup.string().required('Campo obrigatório'),
				password_confirmation: Yup.string().oneOf(
					[Yup.ref('password'), null],
					'Senha não confere'
				),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			const { password, password_confirmation } = data;

			dispatch(
				resetPasswordRequest({ forget, password, password_confirmation })
			);

			setSuccessPasswordReset(true);
		} catch (err) {
			setSuccessPasswordReset(false);
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
					'Ops... Ocorreu um erro ao alterar a senha, Tente novamente'
				);
			}
		}
	}

	return (
		<>
			{successPasswordReset && (
				<S.ContainerSuccess>
					<S.Background src={imgSuccessPassword} />
					<S.TitleSuccess>Senha Alterada com sucesso</S.TitleSuccess>
					<S.Message>OK, agora você pode utilizar o sistema.</S.Message>
					<br />
					<ButtonLink
						size="lg"
						color={colors.success}
						to="/dashboard"
						label="ACESSAR O SISTEMA"
					/>
				</S.ContainerSuccess>
			)}
			{!successPasswordReset && (
				<S.Container>
					<S.Logo src={passwordReset} title="Definir sua nova Senha" />
					<S.Title>Definir sua nova senha</S.Title>

					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input
							id="InputPassword"
							type="password"
							name="password"
							placeholder="Nova senha"
							label="Nova senha"
							autoComplete="off"
						/>
						<Input
							type="password"
							name="password_confirmation"
							placeholder="Confirmar senha"
							label="Confirmar senha"
							autoComplete="off"
						/>
						<Button
							type="submit"
							size="lg"
							label={loading ? 'CARREGANDO...' : 'ATUALIZAR SENHA'}
						/>
					</Form>
				</S.Container>
			)}
		</>
	);
}
