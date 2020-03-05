import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 16px;
	width: 800px;
	margin: 0 auto;
`;

export const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;

	& button,
	a {
		margin-left: 8px;
	}
`;

export const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	& > div {
		flex: 2 1 auto;
		margin-right: 8px;
	}
`;
