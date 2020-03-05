import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

export default function Link({ children, ...rest }) {
  return <S.SLink {...rest}>{children}</S.SLink>;
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
