import produce from 'immer';

import Types from '~/store/types/auth';

const INITIAL_STATE = {
	token: null,
	signed: false,
	loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case Types.SIGN_IN_REQUEST: {
				draft.loading = true;
				break;
			}

			case Types.SIGN_IN_SUCCESS: {
				draft.token = action.payload.token;
				draft.signed = true;
				draft.loading = false;
				break;
			}

			case Types.RESET_PASSWORD_REQUEST: {
				draft.loading = true;
				break;
			}

			case Types.SIGN_FAILURE: {
				draft.loading = false;
				break;
			}
			case Types.SIGN_OUT: {
				draft.token = null;
				draft.signed = false;
				break;
			}

			default:
				return state;
		}
	});
}
