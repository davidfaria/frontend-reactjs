import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Background = styled.img`
	width: auto;
	height: 500px;
	/* height: auto; */
	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		padding: 0 20px;
	}
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 48px;
	padding: 32px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 32px;
		padding: 20px;
	}
`;
export const Message = styled.p`
	color: #fff;
	font-size: 24px;
	text-align: center;
	@media (max-width: 768px) {
		font-size: 18px;
		padding: 20px;
	}
	margin-bottom: 32px;
`;
