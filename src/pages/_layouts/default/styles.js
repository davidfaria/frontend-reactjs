import styled from 'styled-components';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.bg};
`;

export const Main = styled.div`
  display: flex;
  max-width: 1241px;
  margin: 0px auto;
  height: 100%;
  background: ${colors.bg};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }

  /* width: 100%; */
  /* padding-top: 20px; */
  /* background: ${colors.primary}; */
`;
