import { lighten } from 'polished';
import styled from 'styled-components';

import colors from '~/styles/colors';

export const Input = styled.input`
	background: rgba(255, 255, 255, 1);
	border: 1px solid ${colors.border};
	border-radius: 4px;
	height: 45px;
	padding: 12px 15px;
	color: ${colors.text};
	margin: 0 0 10px;
	font-size: 14px;
	/* padding: 6px 12px; */

	&::placeholder {
		color: ${colors.placeholder};
	}

	&:focus {
		/* background: ${lighten(0.45, colors.focus)}; */
		border: 2px solid ${colors.primary};
	}

	&:disabled {
		background: ${colors.disabled};
	}
`;
