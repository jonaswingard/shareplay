import React from 'react';
import styled from 'styled-components';
import useAutoComplete from './useAutoComplete';

const Ul = styled.ul`
	list-style: none;
	padding: 1rem;
	margin: 0;
	border: 1px solid black;
	border-top: 0;
`;
const Button = styled.button`
	display: flex;
	cursor: pointer;
	border: none;
	background: none;
	width: 100%;
	:hover {
		background: #eee;
	}
`;
const Title = styled.span`
	margin-right: 3rem;
`;
const MetaData = styled.span`
	margin-left: auto;
`;
const Input = styled.input`
	width: 100%;
`;

const AutoComplete = ({ placeholder, onSelect }) => {
	const { handleChange, searchResult, value, handleSelect } = useAutoComplete();
	const getTitle = (item) => item.title || item.name;
	const getYear = (item) => new Date(item.release_date || item.first_air_date).getFullYear();

	const handleAutoCompleteSelect = (item) => {
		handleSelect(item);
		onSelect(item);
	};

	return (
		<section>
			<div>
				<Input placeholder={placeholder} onChange={handleChange} value={value} />
			</div>
			<Ul>
				{searchResult.map((item, index) => (
					<li key={index}>
						<Button onClick={() => handleAutoCompleteSelect(item)}>
							<Title>
								{getTitle(item)} ({getYear(item)})
							</Title>
							<MetaData>{item.media_type}</MetaData>
						</Button>
					</li>
				))}
			</Ul>
		</section>
	);
};

export default AutoComplete;
