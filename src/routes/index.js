import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ConfirmSendMail from '../pages/SignUp/ConfirmSendMail';
import ConfirmActive from '../pages/SignUp/ConfirmActive';
import ForgetMail from '../pages/SignIn/ForgetMail';
import ForgetPassword from '../pages/SignIn/ForgetPassword';
import Profile from '~/pages/Profile';
import Wallet from '~/pages/wallet';
import WalletForm from '~/pages/wallet/Form';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" component={SignIn} exact />
			<Route path="/register" component={SignUp} exact />
			<Route path="/confirmSendMail" component={ConfirmSendMail} exact />
			<Route path="/confirmActive/:email" component={ConfirmActive} exact />
			<Route path="/forgetMail" component={ForgetMail} exact />
			<Route path="/forgetPassword/:forget" component={ForgetPassword} exact />

			<Route path="/dashboard" component={Dashboard} isPrivate />
			<Route path="/profile" component={Profile} isPrivate exact />
			<Route path="/wallet" component={Wallet} isPrivate exact />
			<Route path="/wallet/new" component={WalletForm} isPrivate />
			<Route path="/wallet/edit/:_id" component={WalletForm} isPrivate />
		</Switch>
	);
}
