import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
	margin-top: 16px;
	width: 100%;
	padding: 0 10px;
`;

export const DropDownMenu = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	background: #fff;
	position: relative;
`;
export const MenuList = styled.ul`
  background: #fff;
  position: absolute;
  left: 0px;
  top: 18px;
  z-index: 5;
  display: ${props => (props.show ? 'block' : 'none')}
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-top: 8px;
  width: 220px;
  border: 1px solid ${colors.tableBorder};
  & li + li {
    border-top: 1px solid ${colors.tableBorder};
  }

  &::before {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #ebebeb;

    content: '';
    left: 99px;
    top: -20px;
    position: absolute;
  }
`;
