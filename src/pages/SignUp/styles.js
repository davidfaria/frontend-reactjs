import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
	background: #fff;
	border-radius: 4px;
	padding: 20px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	width: 360px;
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
`;

export const Logo = styled.img``;
export const Title = styled.h2`
	color: ${colors.text};
	margin: 16px 0;
`;
