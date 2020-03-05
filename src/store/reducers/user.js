import produce from 'immer';

import TypesAuth from '~/store/types/auth';
import Types from '~/store/types/user';

const INITIAL_STATE = {
	profile: null,
};

export default function user(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case TypesAuth.SIGN_IN_SUCCESS: {
				/**
				 *  Set profile login
				 */
				draft.profile = action.payload.user;
				break;
			}

			case Types.PROFILE_UPDATE_SUCCESS: {
				/**
				 *  Set profile update perfil
				 */
				draft.profile = action.payload.user;
				break;
			}

			case TypesAuth.SIGN_OUT: {
				draft.profile = null;
				break;
			}

			default:
				return state;
		}
	});
}
