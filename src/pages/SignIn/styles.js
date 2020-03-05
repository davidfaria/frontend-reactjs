import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
	background: #fff;
	border-radius: 4px;
	padding: 20px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	width: 380px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		width: 320px;
	}

	form {
		text-align: center;
		width: 100%;
		border-radius: 4px;

		/* label {
      margin-bottom: 4px;
    } */

		button {
			width: 100%;
		}

		span {
			margin-bottom: 4px;
		}

		a {
			color: ${colors.text};
		}
	}
	a {
		color: ${colors.text};
	}
`;

export const Logo = styled.img``;
export const Title = styled.h1`
	margin-bottom: 32px;
`;

export const ForgetPassword = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	position: relative;

	a {
		display: flex;
		justify-content: flex-end;
		position: absolute;
		top: 0px;
		left: 200px;
		@media (max-width: 768px) {
			left: 145px;
		}
	}
`;
