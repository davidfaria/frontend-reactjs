import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { Panel } from '~/components/UI';
import { Form } from '@unform/core';
import { Input, Button, InputAvatar } from '~/components/Form';

import { profileUpdateRequest } from '~/store/actions/user';
import api from '~/services/api';
// import { toastSuccess } from '~/util/toast';

export default function Profile() {
	const formRef = useRef(null);
	const profile = useSelector(state => state.user.profile);
	const dispatch = useDispatch();

	async function handleSubmit(data) {
		try {
			// Remove all previous errors
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				name: Yup.string().required('O nome é obrigatório'),
				email: Yup.string()
					.email()
					.required('O e-mail é obrigatório'),
				password: Yup.string(),
				password_confirmation: Yup.string().oneOf(
					[Yup.ref('password'), null],
					'Senha não confere'
				),
			});

			await schema.validate(data, {
				abortEarly: false,
			});

			// console.log('err', err);
			// Validation passed

			let file = null;
			if (data.avatar) {
				const formData = new FormData();
				formData.append('file', data.avatar);
				const resfile = await api.post('files', formData);
				file = resfile.data;
			} else {
				file = profile.file;
			}

			const { name, email, password, password_confirmation } = data;

			// console.log({
			// 	name,
			// 	email,
			// 	password,
			// 	password_confirmation,
			// 	file: file ? file._id : null,
			// });

			dispatch(
				profileUpdateRequest({
					name,
					email,
					password,
					password_confirmation,
					file: file ? file._id : null,
				})
			);

			// await api.put('/users', {
			// 	name,
			// 	email,
			// 	password,
			// 	password_confirmation,
			// 	file: file ? file._id : null,
			// });
			// toastSuccess('Perfil Atualizado');
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
		<Container>
			<Panel>
				<Form
					ref={formRef}
					initialData={{ ...profile, avatar: profile?.file?.url }}
					onSubmit={handleSubmit}
				>
					<InputAvatar name="avatar" />
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
						disabled
					/>
					<Input
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
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Button
							type="submit"
							onClick={() => formRef.current.submitForm()}
							size="md"
							label="ATUALIZAR PERFIL"
						/>
					</div>
				</Form>
			</Panel>
		</Container>
	);
}
