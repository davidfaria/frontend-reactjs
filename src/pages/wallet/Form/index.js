import React, { useRef, useEffect } from 'react';
import { MdReply, MdDone } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { Form } from '@unform/core';
import * as Yup from 'yup';

import { ButtonLink, Button, Input, InputCheckBox } from '~/components/Form';
import { HeaderBar, PageTitle, Panel } from '~/components/UI';
import api from '~/services/api';
import { toastError, toastSuccess } from '~/util/toast';
import colors from '~/styles/colors';

import * as S from './styles';
import { Container } from './styles';
import { setFocus } from '~/util/util';

export default function WalletForm() {
	const { _id } = useParams();
	const formRef = useRef(null);
	const initialData = {
		name: '',
		status: true,
	};

	async function loadWallet(_id) {
		try {
			const res = await api.get(`wallets/${_id}`);

			const { data } = res;
			formRef.current.setData({
				name: data.name,
				status: data.status,
			});
		} catch (error) {
			toastError(error);
		}
	}

	async function update(data) {
		try {
			await api.put(`wallets/${data._id}`, data);
			toastSuccess('Carteira atualizada');
		} catch (error) {
			toastError(error);
		}
	}

	async function save(data) {
		try {
			await api.post('wallets', data);
			toastSuccess('Carteira criada');
		} catch (error) {
			toastError(error);
		}
	}
	function initForm() {
		formRef.current.setFieldValue('status', true);
	}

	async function handleSubmit(data, { reset }) {
		try {
			// const data = formRef.current.getData();
			// Remove all previous errors
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				id: Yup.string(),
				name: Yup.string().required('O Nome da carteira é obrigatório'),
				status: Yup.bool().required('Campo obrigatório'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
			// Validation passed

			if (_id) {
				update({ ...data, _id });
			} else {
				save(data);
				reset();
				initForm();
				setFocus('InputName');
			}
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

	useEffect(() => {
		if (_id) {
			loadWallet(_id);
		}
		setFocus('InputName');
	}, [_id]);

	return (
		<Container>
			<HeaderBar>
				<PageTitle>Carteira</PageTitle>

				<S.Buttons>
					<ButtonLink
						to="/wallet"
						label="VOLTAR"
						size="md"
						color={colors.second}
						icon={<MdReply size={24} />}
					/>
					<Button
						label="SALVAR"
						color={colors.success}
						icon={<MdDone size={24} />}
						onClick={() => formRef.current.submitForm()}
					/>
				</S.Buttons>
			</HeaderBar>

			<Panel>
				<Form
					// onKeyPress={e =>
					// 	e.key === 'Enter' ? formRef.current.submitForm() : null
					// }
					ref={formRef}
					initialData={initialData}
					onSubmit={handleSubmit}
				>
					<S.Grid>
						<Input
							id="InputName"
							name="name"
							label="Carteira"
							placeholder="Ex: Nubank, Banco Inter, Casa..."
						/>
						<InputCheckBox name="status" label="Status" />
						{/* <InputSwitch name="status" label="Status" /> */}
					</S.Grid>
				</Form>
			</Panel>
		</Container>
	);
}
