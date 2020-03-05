import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '~/components/Form';

import * as S from './styles';
import { signOut } from '~/store/actions/auth';

import logo from '~/assets/logo-header.png';
import avatarDefault from '~/assets/avatar.png';
export default function Header() {
	const profile = useSelector(state => state.user.profile);
	const dispacth = useDispatch();

	function handleSignOut() {
		dispacth(signOut());
	}

	return (
		<S.Container>
			<S.Content>
				<nav>
					<Link to="/">
						<img src={logo} width="160" alt="Logo Empresa" />
					</Link>
				</nav>

				<aside>
					<S.Profile>
						<div>
							<strong>{profile?.name}</strong>

							<span onClick={handleSignOut}>sair do sistema</span>
						</div>
						<div>
							<Link to="/profile">
								<S.Avatar
									src={profile?.file ? profile?.file?.url : avatarDefault}
									alt="Avatar"
								/>
							</Link>
						</div>
					</S.Profile>
				</aside>
			</S.Content>
		</S.Container>
	);
}
