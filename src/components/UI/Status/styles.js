import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	justify-content: flex-start;
	align-items: center;
`;

export const Status = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	background: ${props => lighten(0.4, props.color)};
	border: 1px solid ${props => props.color};
	padding: 3px 6px;
	border-radius: 12px;

	& > span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: ${props => props.color};
	}

	& > strong {
		margin-left: 6px;
		color: ${props => props.color};
		font-size: 10px;
		font-weight: bold;
	}
`;
