import React from 'react';
import { MdSearch } from 'react-icons/md';

import * as S from './styles';

export default function InputSearch({ ...rest }) {
	return (
		<S.Container>
			<MdSearch size={24} />
			<S.Input {...rest} />
		</S.Container>
	);
}
