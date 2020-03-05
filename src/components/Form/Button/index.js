import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import PropTypes from 'prop-types';

import colors from '~/styles/colors';

import * as S from './styles';

export default function Button({
	label,
	color,
	size,
	icon,
	isBlock,
	loading,
	...rest
}) {
	return (
		<S.Button color={color} size={size} isBlock={isBlock} {...rest}>
			{loading && (
				<FaSpinner
					className="icon-spin"
					style={{ margin: '0px 8px' }}
					size={24}
					color="#fff"
				/>
			)}
			{icon}
			{label}
		</S.Button>
	);
}

Button.defaultProps = {
	color: colors.primary,
	label: '',
	icon: null,
	loading: false,
	size: 'md',
	isBlock: false,
};

Button.propTypes = {
	color: PropTypes.string,
	label: PropTypes.string,
	icon: PropTypes.element,
	loading: PropTypes.bool,
	size: PropTypes.string, // sm = small, md = normal //lg = large
	isBlock: PropTypes.bool,
};
