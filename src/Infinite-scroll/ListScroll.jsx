import React from 'react'
import { useCallback, useState, useRef } from 'react';

import InfiniteScroll from './InfiniteScroll';

const ListScroll = () => {
	const [query, setQuery] = useState('');
	const [data, setData] = useState([]);

	const controllerRef = useRef(null)

	const handleInput = useCallback((e) => {
		setQuery(e.target.value)
		setData([])
	}, [])

	const renderItem = useCallback(({ title }, key, ref) => <div ref={ref} key={key}>{title}</div>)
	const getData = useCallback(
		(query, pageNumber) => {
			return new Promise(async (res, rej) => {
				try {
					if (controllerRef.current) controllerRef.current.abort()
					controllerRef.current = new AbortController()

					const promise = await fetch('https://openlibrary.org/search.json?' +
						new URLSearchParams({
							q: query,
							page: pageNumber
						}), { signal: controllerRef.current.signal })
					const data = await promise.json()
					res()
					setData((prevData) => [...prevData, ...data.docs])
				} catch (e) {
					rej()
					console.log(e);
				}
			})

		},
		[],
	)


	return (
		<div>
			<h1>Infinite Scroll list</h1>
			<input type="text" value={query} onChange={handleInput} />

			<InfiniteScroll
				renderListItem={renderItem}
				getData={getData}
				listData={data}
				query={query}
			/>
		</div>
	)
}

export default ListScroll