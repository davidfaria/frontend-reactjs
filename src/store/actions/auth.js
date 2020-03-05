import Types from '~/store/types/auth';

export function signInRequest({ email, password }) {
	return {
		type: Types.SIGN_IN_REQUEST,
		payload: { email, password },
	};
}

export function signInSucess(token, user) {
	return {
		type: Types.SIGN_IN_SUCCESS,
		payload: { token, user },
	};
}

export function signUpRequest({ name, email, password, link }) {
	return {
		type: Types.SIGN_UP_REQUEST,
		payload: { name, email, password, link },
	};
}

export function signUpSucess(token, user) {
	return {
		type: Types.SIGN_UP_SUCCESS,
		payload: { token, user },
	};
}

export function signFailure() {
	return {
		type: Types.SIGN_FAILURE,
	};
}

export function signOut() {
	return {
		type: Types.SIGN_OUT,
	};
}

export function resetPasswordRequest({
	forget,
	password,
	password_confirmation,
}) {
	return {
		type: Types.RESET_PASSWORD_REQUEST,
		payload: { forget, password, password_confirmation },
	};
}
