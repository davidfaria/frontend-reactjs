import styled from 'styled-components';

import colors from '~/styles/colors';

export const Paginator = styled.ul`
	display: flex;
	align-items: center;
	justify-content: ${props =>
		props.align === 'center' ? 'center' : 'flex-start'};
	list-style: none;
`;
export const PagePrev = styled.li`
	padding: 0.5rem 0.75rem;
	margin-left: 8px;
	line-height: 1.25;
	font-weight: bold;
	color: ${props => (props.active ? '#fff' : colors.textTable)};

	&:hover {
		background-color: ${colors.second};
		cursor: pointer;
		color: #fff;
		border-radius: 50%;
	}
`;

export const PageNext = styled.li`
	padding: 0.5rem 0.75rem;
	margin-left: 8px;
	line-height: 1.25;
	font-weight: bold;
	color: ${props => (props.active ? '#fff' : colors.textTable)};

	&:hover {
		background-color: ${colors.second};
		cursor: pointer;
		color: #fff;
		border-radius: 50%;
	}
`;

export const PageItem = styled.li`
	padding: 0.5rem 0.75rem;
	margin-left: 8px;
	line-height: 1.25;
	font-weight: bold;
	color: ${props => (props.active ? '#fff' : colors.textTable)};
	background-color: ${props => (props.active ? colors.primary : '')};
	border-radius: 50%;
	&:hover {
		background-color: ${props => (props.active ? '' : colors.second)};
		cursor: pointer;
		color: #fff;
	}
`;
