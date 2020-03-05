import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

export default function Status({ label, color, ...rest }) {
	return (
		<S.Container>
			<S.Status color={color} {...rest}>
				<span />
				<strong>{label}</strong>
			</S.Status>
		</S.Container>
	);
}

Status.defaultProps = {
	color: '#28a745',
};

// #dc3545
// #007bff
// #ffc107

Status.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string,
};
