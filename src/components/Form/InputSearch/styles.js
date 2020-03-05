import { lighten } from 'polished';
import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

	svg {
		position: absolute;
		top: 6px;
		left: 5px;
		/* margin-right: 8px; */
		color: ${colors.placeholder};
	}
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 1);
  border: 1px solid ${colors.border};
  border-radius: 4px;
  height: 34px;
  padding: 6px 12px 6px 32px;
  color: ${colors.input};
  /* margin: 0 0 10px; */


  &::placeholder {
    color: ${colors.placeholder};
  }

  &:focus {
    /* background:  ${lighten(0.45, colors.focus)}; */
    border: 2px solid ${colors.primary};
  }

  &:disabled{
    background: ${colors.disabled}
  }
`;
