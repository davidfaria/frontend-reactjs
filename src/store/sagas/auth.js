import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import { signInSucess, signFailure } from '~/store/actions/auth';

import Types from '~/store/types/auth';
import api from '~/services/api';
import { toastError, toastWarning, toastSuccess } from '~/util/toast';

export function* singUp({ payload }) {
	try {
		const { name, email, password, link } = payload;

		const res = yield call(api.post, 'register', {
			name,
			email,
			password,
			link,
		});

		const result = res.data;

		if (result.exists) {
			toastWarning('Usuário já cadastro, verifique seu e-mail');
		} else {
			toastSuccess(
				'Usuário criado, verifique seu e-mail para ativar seu cadastro.'
			);
			history.push('/confirmSendMail');
		}
	} catch (error) {
		toastError('Erro ao criar conta');
		yield put(signFailure());
	}
}

export function* singIn({ payload }) {
	try {
		const { email, password } = payload;

		const res = yield call(api.post, 'sessions', {
			email,
			password,
		});

		const { token, user } = res.data;

		// console.log(token, user);

		api.defaults.headers.Authorization = `Bearer ${token}`;

		yield put(signInSucess(token, user));

		history.push('/dashboard');
	} catch (error) {
		toastError('Usuário ou senha inválido');
		yield put(signFailure());
	}
}

function* resetPassword({ payload }) {
	try {
		const { forget, password, password_confirmation } = payload;

		const res = yield call(api.put, 'forgetResetPassword', {
			forget,
			password,
			password_confirmation,
		});

		// toastSuccess('Senha Atualizada');

		const { token, user } = res.data;

		api.defaults.headers.Authorization = `Bearer ${token}`;

		console.log(token, user);

		yield put(signInSucess(token, user));
	} catch (error) {
		toastError('Erro ao atualizar senha, confira seus dados!');
		yield put(signFailure());
	}
}

export function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;
	api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
	history.push('/');
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest(Types.SIGN_UP_REQUEST, singUp),
	takeLatest(Types.SIGN_IN_REQUEST, singIn),
	takeLatest(Types.SIGN_OUT, signOut),
	takeLatest(Types.RESET_PASSWORD_REQUEST, resetPassword),
]);
