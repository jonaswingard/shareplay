import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import styled from 'styled-components';
import AutoComplete from './AutoComplete/AutoComplete';

const Button = styled.button`
	margin-top: 1rem;
`;

const Input = styled.input`
	width: 20rem;
`;

const Form = () => {
	const [item, setItem] = useState({});
	const [tags, setTags] = useState('');
	const [, dispatch] = useStateValue();

	const clear = () => {
		setItem({});
		setTags('');
	};

	const getTags = (tags) => tags.split(',').map((tag) => tag.trim());

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: 'addItem',
			newItem: { ...item, tags: getTags(tags) }
		});

		dispatch({
			type: 'saveItems'
		});

		clear();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<AutoComplete placeholder="Title" onSelect={(item) => setItem(item)} />
			</div>
			<div>
				<Input
					placeholder="Tags (separated by comma)"
					value={tags}
					onChange={(event) => setTags(event.target.value)}
				/>
			</div>
			<Button>Submit</Button>
		</form>
	);
};
export default Form;
