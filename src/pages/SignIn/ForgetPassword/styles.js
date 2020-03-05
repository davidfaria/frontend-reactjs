import styled from 'styled-components';

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

		button {
			margin-top: 16px;
			width: 100%;
		}

		span {
			margin-bottom: 4px;
		}
	}
`;

export const Logo = styled.img`
	width: 160px;
`;
export const Title = styled.h1`
	margin-bottom: 32px;
`;

export const ContainerSuccess = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Background = styled.img`
	width: auto;
	/* height: auto; */
	height: 500px;
	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		padding: 0 20px;
	}
`;

export const TitleSuccess = styled.h1`
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
`;
