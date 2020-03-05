import styled from 'styled-components';

import colors from '~/styles/colors';

const Table = styled.table`
	width: 100% !important;
	border-spacing: 0;
`;

const Thead = styled.thead`
	text-align: ${props => props.align};
`;

const Th = styled.th`
	text-align: ${props => props.align};
	color: ${colors.strong};
	font-weight: bold;
	padding: 16px;
`;

const Tr = styled.tr``;

const Td = styled.td`
	background: #fff;
	text-align: ${props => props.align};
	color: ${colors.textTable};
	font-weight: bold;
	padding: 16px;
	border-bottom: 16px solid ${colors.bg};
`;

const Tbody = styled.tbody``;

export { Table, Thead, Th, Tr, Td, Tbody };
