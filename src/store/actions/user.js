import Types from '~/store/types/user';

export function profileUpdateRequest(data) {
	return {
		type: Types.PROFILE_UPDATE_REQUEST,
		payload: data,
	};
}

export function profileUpdateSucess(user) {
	return {
		type: Types.PROFILE_UPDATE_SUCCESS,
		payload: { user },
	};
}

export function signInSucess(token, user) {
	return {
		type: Types.SIGN_IN_SUCCESS,
		payload: { token, user },
	};
}

export function profileFailure() {
	return {
		type: Types.PROFILE_FAILURE,
	};
}
