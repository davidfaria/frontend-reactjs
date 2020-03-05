import React from 'react';

import * as S from './styles';
import sendMailConfirm from '~/assets/auth/send_mail_register.png';

export default function ConfirmSendMail() {
	return (
		<S.Container>
			<S.Background src={sendMailConfirm} />
			<S.Title>Falta pouco! Confirme seu cadastro</S.Title>
			<S.Message>
				Enviamos um link de confirmação para seu e-mail. Acesse e siga as
				instruções.
			</S.Message>
		</S.Container>
	);
}
