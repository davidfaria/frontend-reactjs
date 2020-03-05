import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
	height: 100%;
	/* background: ${colors.primary}; */
	/* background: ${`radial-gradient(circle at center, ${colors.primary} 0, #fff  100%)`}; */
	background: rgb(26,94,163);
	background: linear-gradient(180deg, rgba(26,94,163,1) 0%, rgba(38,135,233,1) 70%, rgba(81,159,237,1) 100%);

	display: flex;
	align-items: center;
	justify-content: center;
`;

// export const Content = styled.div`
// 	width: 100%;
// 	max-width: 315px;
// `;
