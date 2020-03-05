import { takeLatest, call, put, all } from 'redux-saga/effects';

import { profileUpdateSucess, profileFailure } from '~/store/actions/user';
import Types from '~/store/types/user';
import api from '~/services/api';
import { toastSuccess, toastError } from '~/util/toast';

function* updateProfile({ payload }) {
	try {
		const { name, email, file, ...rest } = payload;

		const profile = {
			name,
			email,
			file,
			...(rest.password_confirmation ? rest : {}),
		};

		const res = yield call(api.put, 'users', profile);

		toastSuccess('Perfil Atualizado!');

		const { user } = res.data;
		// console.tron.log('Res', res);

		yield put(profileUpdateSucess(user));
	} catch (error) {
		toastError('Erro ao atualizar perfil, confira seus dados!');
		yield put(profileFailure());
	}
}

export default all([takeLatest(Types.PROFILE_UPDATE_REQUEST, updateProfile)]);
