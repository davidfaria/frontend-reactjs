import { Link } from 'react-router-dom';

import { darken } from 'polished';
import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  /* margin: auto 20px;

  display: flex;
  flex-direction: column; */
`;

export const MenuGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  a {
    margin: 8px;
  }
`;
export const Menu = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 128px;
  background: #fff;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#fff')};
  }
`;

export const Icon = styled.img`
  width: 64px;
`;
export const Label = styled.p`
  color: ${colors.text};
`;
