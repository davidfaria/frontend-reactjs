import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonLink } from '~/components/Form';
import * as S from './styles';
// import emailConfirmed from '~/assets/auth/email_confirmed.png';
import emailConfirmed from '~/assets/auth/email_confirmed.svg';
import colors from '~/styles/colors';
import api from '~/services/api';
import { toastSuccess, toastError } from '~/util/toast';
export default function ConfirmActive() {
	const { email } = useParams();

	useEffect(() => {
		if (email) {
			async function emailConfirm(email) {
				try {
					const res = await api.post('/confirmEmail', { hash: email });
					if (res.data.updated) {
						toastSuccess('Seu cadastro foi confirmado');
					}
				} catch (err) {
					toastError('Erro ao confirmar cadastro');
				}
			}
			emailConfirm(email);
		}
	}, [email]);

	return (
		<S.Container>
			<S.Background src={emailConfirmed} />
			<S.Title>Tudo pronto!</S.Title>
			<S.Message>Bem vindo(a) ao [SISTEMA X].</S.Message>
			<ButtonLink size="lg" color={colors.success} to="/" label="FAZER LOGIN" />
		</S.Container>
	);
}
