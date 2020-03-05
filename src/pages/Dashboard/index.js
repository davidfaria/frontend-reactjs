import React from 'react';

import config from '~/assets/icons/config.png';
import despesa from '~/assets/icons/despesa.png';
import receita from '~/assets/icons/receita.png';
import subscription from '~/assets/icons/subscription.png';
import wallet from '~/assets/icons/wallet.png';

import * as S from './styles';

export default function Dashboard() {
	const menus = [
		{
			label: 'Carteiras',
			title: 'Gerenciar Carteiras',
			to: '/wallet',
			icon: wallet,
		},
		{
			label: 'Receita',
			title: 'Ex: Salário, vendas, prestação de serviço...',
			to: '/invoices/receita',
			icon: receita,
		},
		{
			label: 'Despesa',
			title: 'Ex: Aluguel, luz, água...',
			to: '/invoices/despesa',
			icon: despesa,
		},
		{
			label: 'Assinatura',
			title: 'Gerencie sua assinatura',
			to: '/subscription',
			icon: subscription,
		},
		{
			label: 'Configuração',
			title: 'Configurações do sistema',
			to: '/config',
			icon: config,
		},
	];

	return (
		<S.Container>
			<S.MenuGroup>
				{menus.map(menu => (
					<S.Menu key={menu.to} title={menu.title} to={menu.to}>
						<S.Icon src={menu.icon} />
						<S.Label>{menu.label}</S.Label>
					</S.Menu>
				))}
			</S.MenuGroup>
		</S.Container>
	);
}
