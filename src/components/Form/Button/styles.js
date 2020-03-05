import { darken } from 'polished';
import styled from 'styled-components';

// import colors from '~/styles/colors';

const getSize = size => {
	switch (size) {
		case 'sm':
			return 'height: 22px; padding: 1px 5px';

		case 'md':
			return 'height: 34px; padding: 6px 12px';

		case 'lg':
			return 'height: 46px; padding: 10px 16px';

		default:
			return 'height: 23px; padding: 6px 12px';
	}
};

const getBlock = isBlock => {
	if (isBlock) return 'width: 100%';
};

export const Button = styled.button.attrs(props => ({
	type: 'submit',
}))`
	background-color: ${props => props.color};
	border: 0;
	border-radius: 4px;
	font-size: 14px;

	color: #fff;
	font-weight: bold;
	text-transform: uppercase;

	transition: background 0.2s;
	&:hover {
		background: ${props => darken(0.05, props.color)};
	}

	display: flex;
	justify-content: center;
	align-items: center;

	${({ size }) => getSize(size)}
	${({ isBlock }) => getBlock(isBlock)}
`;
