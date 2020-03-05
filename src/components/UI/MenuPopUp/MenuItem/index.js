import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';
const MenuItem = styled.div`
	display: flex;
	align-items: center;
	padding: 8px 4px;
	cursor: pointer;

	a {
		display: flex;
		align-items: center;
		color: ${colors.tableTd};
		text-decoration: none;
	}

	&:hover {
		background: ${darken(0.01, '#F1F4F9')};
	}
`;

const MenuLabel = styled.span`
	margin-left: 8px;
`;

export { MenuItem, MenuLabel };
