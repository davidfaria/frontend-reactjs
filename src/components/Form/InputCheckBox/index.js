import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Label } from '~/components/Form';

import * as S from './styles';

export default function InputCheckBox({ name, label, ...rest }) {
	const inputRef = useRef(null);
	const { fieldName, registerField, defaultValue } = useField(name);
	const [checked, setChecked] = useState(defaultValue);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'checked',
		});

		// console.log(inputRef);
	}, [fieldName, registerField]);

	function handleChange(value) {
		// console.log('value', !value);
		setChecked(!value);
	}

	return (
		<S.Container>
			<Label>
				<S.Input
					type="checkbox"
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

InputCheckBox.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};
