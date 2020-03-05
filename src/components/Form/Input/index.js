import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { FormGroup, ErrorMsg, Label } from '~/components/Form';

import * as S from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <FormGroup>
      <Label>{label}</Label>
      <S.Input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </FormGroup>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
