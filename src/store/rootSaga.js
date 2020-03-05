import { all } from 'redux-saga/effects';

import auth from '~/store/sagas/auth';
import user from '~/store/sagas/user';

export default function* rootSaga() {
  return yield all([auth, user]);
}
