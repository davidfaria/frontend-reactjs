import React, { useRef, useEffect, useState } from 'react';
import Switch from 'react-switch';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Label } from '~/components/Form';

import * as S from './styles';

export default function InputSwitch({ name, label, ...rest }) {
	const inputRef = useRef(null);
	const { fieldName, registerField, defaultValue } = useField(name);
	const [checked, setChecked] = useState(defaultValue);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'checked',
		});
		// inputRef.current.checked = defaultValue;
		// inputRef.current.value = defaultValue;
	}, [fieldName, registerField]);

	function handleChange(value) {
		setChecked(!value);
		inputRef.current.checked = !value;
		inputRef.current.value = !value;
	}

	return (
		<S.Container>
			<Label>
				<Switch
					ref={inputRef}
					defaultValue={defaultValue}
					checked={checked}
					onChange={() => handleChange(checked)}
					{...rest}
				/>
				<span>{label}</span>
			</Label>
		</S.Container>
	);
}

InputSwitch.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};
