import React from 'react';

import PropTypes from 'prop-types';

import colors from '~/styles/colors';

import * as S from './styles';

export default function ButtonLink({ label, icon, to, size, color, ...rest }) {
  return (
    <S.Button to={to} size={size} color={color} {...rest}>
      {icon}
      {label}
    </S.Button>
  );
}

ButtonLink.defaultProps = {
  size: 'md',
  icon: null,
  color: colors.primary,
};

ButtonLink.propTypes = {
  label: PropTypes.PropTypes.string.isRequired,
  icon: PropTypes.element,
  to: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
