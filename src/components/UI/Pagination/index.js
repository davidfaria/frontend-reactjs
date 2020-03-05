import React, { useState, useMemo } from 'react';

import PropTypes from 'prop-types';

import { Paginator, PagePrev, PageItem, PageNext } from './styles';

export default function Pagination({
	align,
	onLoadPage,
	page,
	totalPage,
	sizePagination,
}) {
	const [itens, setItens] = useState([]);
	const [pageSelected, setPageSelected] = useState(1);

	useMemo(() => {
		const size = totalPage < sizePagination ? totalPage : sizePagination;
		const currentPage = page || 1;

		let start = 1;
		let length = size;

		if (currentPage > size) {
			start = currentPage - size;
			length = start + size;
		}

		const fill = [];
		for (let number = start; number <= length; number += 1) {
			fill.push(number);
		}

		setItens(fill);

		setPageSelected(page);
	}, [page, totalPage, sizePagination]);

	function handleLoadPage(pageLoad) {
		setPageSelected(pageLoad);
		onLoadPage(pageLoad);
	}

	function handlePrevPage() {
		if (pageSelected === 1) return;
		const pagePrev = pageSelected - 1;
		setPageSelected(pagePrev);
		handleLoadPage(pagePrev);
	}

	function handleNextPage() {
		if (pageSelected === totalPage) return;
		const pageNext = pageSelected + 1;
		setPageSelected(pageNext);
		handleLoadPage(pageNext);
	}

	return (
		<Paginator align={align}>
			{pageSelected > 1 && (
				<PagePrev title="Anterior" onClick={handlePrevPage}>
					&laquo;
				</PagePrev>
			)}

			{itens.map((item, index) => (
				<PageItem
					title={`Ir para página ${item}`}
					key={String(index)}
					active={item === pageSelected}
					onClick={() => handleLoadPage(item)}
				>
					{item}
				</PageItem>
			))}
			{pageSelected < totalPage && (
				<PageNext title="Próxima" onClick={handleNextPage}>
					&raquo;
				</PageNext>
			)}
		</Paginator>
	);
}

Pagination.defaultProps = {
	align: 'center',
	sizePagination: 7,
};

Pagination.propTypes = {
	align: PropTypes.string,
	onLoadPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	totalPage: PropTypes.number.isRequired,
	sizePagination: PropTypes.number,
};
