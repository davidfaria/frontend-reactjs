import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { PopUpButton } from './styles';

export default function MenuPopUp({ children, ...rest }) {
	return (
		<Popup
			trigger={
				<PopUpButton type="button">
					<MdMoreHoriz color="#C6C6C6" size={24} />
				</PopUpButton>
			}
			position="bottom center"
			contentStyle={{
				width: '150px',
				borderRadius: '4px',
			}}
			{...rest}
		>
			{children}
		</Popup>
	);
}

MenuPopUp.propTypes = {
	children: PropTypes.element.isRequired,
};