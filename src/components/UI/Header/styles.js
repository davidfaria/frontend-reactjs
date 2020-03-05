import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
	background: #fff;
	/* background: ${colors.primary}; */
	padding: 0 30px;
	border: 1px solid ${colors.border};
	/* max-width: 1241px; */
	max-width: 100%;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 100%;
		padding: 0 10px;
	}
`;

export const Content = styled.div`
	height: 64px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	nav {
		display: flex;
		align-items: center;

		img {
			margin-right: 20px;
			padding-right: 20px;
			border-right: 1px solid ${colors.border};
		}

		ul {
			display: flex;
			justify-content: center;
			align-items: center;

			li {
				&:nth-child(1) {
					margin-left: 30px;
				}
				margin-right: 20px;
			}
		}
	}

	aside {
		display: flex;
		align-items: center;
	}
`;

export const Menu = styled(NavLink)`
	font-weight: bold;
	color: ${colors.placeholder};
`;

export const Profile = styled.div`
	display: flex;
	margin-left: 20px;
	padding-left: 20px;

	div {
		text-align: right;
		margin-right: 10px;

		strong {
			display: block;
			color: ${colors.strong};
		}

		span {
			cursor: pointer;
			color: ${colors.danger};
		}
	}
`;

export const Avatar = styled.img`
	height: 32px;
	border-radius: 50%;
`;
