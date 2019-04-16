import { useState, useEffect } from 'react';
import result from './result.json';

const useAutoComplete = () => {
	const [searchResult, setSearchResult] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		setSearchResult(result.results);
	}, []);

	const updateSearchResult = (query) => {
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
		fetch(url)
			.then((res) => res.json())
			.then((result) => setSearchResult(result.results), (error) => console.log(error));
	};

	const handleChange = (event) => {
		const value = event.target.value;
		if (value.length >= 3) {
			updateSearchResult(value);
		}
	};

	const clear = () => {
		setSearchResult([]);
	};

	const handleSelect = (item) => {
		clear();
		setValue(item.title);
	};

	return { handleChange, searchResult, clear, value, setValue, handleSelect };
};

export default useAutoComplete;
