import React, { useEffect, useState } from 'react';
import { MdAdd, MdEdit, MdCancel } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import {
	PageTitle,
	HeaderBar,
	Status,
	Table,
	Thead,
	Th,
	Tr,
	Td,
	Tbody,
	MenuPopUp,
	MenuItem,
	MenuLabel,
	Pagination,
	PaginationInfo,
} from '~/components/UI';
import { InputSearch, ButtonLink } from '~/components/Form';

import api from '~/services/api';
import { toastSuccess, toastError } from '~/util/toast';
import Alert from '~/util/alert';
import { setFocus } from '~/util/util';

export default function Wallet() {
	const history = useHistory();
	const [wallets, setWallets] = useState([]);
	const [page, setPage] = useState(1);
	const [termSearch, setTermSearch] = useState('');
	const [pagination, setPagination] = useState({
		page: 1,
		perPage: 3,
		total: 0,
		lastPage: 0,
	});

	async function loadWallets(pageNumber = page) {
		setPage(pageNumber);
		const params = {
			page: pageNumber,
			perPage: pagination.perPage,
			q: termSearch,
		};

		const res = await api.get('wallets', { params });

		const result = res.data;

		setWallets(result.data);
		delete result.data;
		setPagination(result);
	}

	async function onRemove(id) {
		try {
			await api.delete(`wallets/${id}`);

			const newList = wallets.filter(el => el._id !== id);
			const total = pagination.total - 1;
			const lastPage = Math.ceil(total / pagination.perPage);

			// console.log({
			// 	...pagination,
			// 	total,
			// 	lastPage,
			// });

			setPagination({
				...pagination,
				total,
				lastPage,
			});
			setWallets(newList);

			toastSuccess('Carteira removida');
		} catch (error) {
			toastError(error);
		}
	}

	function handleSearch(e) {
		if (e.charCode === 13) {
			loadWallets(page);
		}
	}

	function handleRemove(id) {
		Alert.delete().then(result => {
			if (result.value) {
				onRemove(id);
			}
		});
	}

	function handleLoadPage(page) {
		loadWallets(page);
	}

	useEffect(() => {
		loadWallets(1);
		setFocus('InputSeach');
	}, []); //eslint-disable-line

	return (
		<S.Container>
			<PageTitle>Gerenciando Carteiras</PageTitle>

			<HeaderBar>
				<span>
					<InputSearch
						id="InputSeach"
						onChange={e => setTermSearch(e.target.value)}
						onKeyPress={e => handleSearch(e)}
						placeholder="buscar por carteira"
					/>
				</span>
				<span>
					<ButtonLink
						to="/wallet/new"
						label="CADASTRAR"
						size="md"
						icon={<MdAdd size={24} />}
					/>
				</span>
			</HeaderBar>

			<Table>
				<Thead align="left">
					<Tr>
						<Th>Carteira</Th>
						<Th>Status</Th>
						<Th align="right">Ações</Th>
					</Tr>
				</Thead>
				<Tbody>
					{wallets.map(wallet => (
						<Tr key={wallet._id}>
							<Td>{wallet.name}</Td>
							<Td>
								<Status
									label={wallet.status ? 'ATIVA' : 'DESATIVADA'}
									color={wallet.status ? '#28a745' : '#dc3545'}
								/>
							</Td>
							<Td align="center">
								<MenuPopUp>
									<>
										<MenuItem
											onClick={() => history.push(`/wallet/edit/${wallet._id}`)}
										>
											<MdEdit size={16} />
											<MenuLabel>Editar</MenuLabel>
										</MenuItem>
										<MenuItem onClick={() => handleRemove(wallet._id)}>
											<MdCancel size={16} />
											<MenuLabel>Excluir</MenuLabel>
										</MenuItem>
									</>
								</MenuPopUp>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

			<PaginationInfo
				page={pagination.page}
				perPage={pagination.perPage}
				totalPage={pagination.lastPage}
				total={pagination.total}
			/>
			<br />
			<Pagination
				onLoadPage={handleLoadPage}
				page={pagination.page}
				totalPage={pagination.lastPage}
			/>
		</S.Container>
	);
}
