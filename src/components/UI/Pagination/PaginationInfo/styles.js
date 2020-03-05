import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: ${colors.dark};
  }

  span {
    color: ${colors.dark};
  }
`;
