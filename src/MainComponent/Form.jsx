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
	const [title, setTitle] = useState('');
	const [tags, setTags] = useState('');
	const [, dispatch] = useStateValue();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: 'addItem',
			newItem: { title, tags: tags.split(',').map((tag) => tag.trim()) }
		});

		setTitle('');
		setTags('');
	};

	const handleSelect = (item) => {
		console.log('selected', item);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				{/* <Input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        /> */}

				<AutoComplete placeholder="Title" onSelect={handleSelect} />
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
