import React from 'react';
import styled from 'styled-components';
import useAutoComplete from './useAutoComplete';

const Ul = styled.ul`
	list-style: none;
	padding: 1rem;
	margin: 0;
	border: 1px solid black;
	border-top: 0;
	position: absolute;
	left: 0;
	right: 0;
	background: #fff;
	}
`;
const Button = styled.button`
	display: flex;
	cursor: pointer;
	border: none;
	background: none;
	width: 100%;
	text-align: left;
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
	box-sizing: border-box;
`;
const Container = styled.div`
	position: relative;
`;

const Highlight = ({ text, highlight }) => {
	const splitText = text.toLowerCase().split(highlight);
	const hText = <span style={{ fontWeight: 'bold' }}>{highlight}</span>;
	return [splitText[0], hText, splitText[1]].map((item, index) => (
		<React.Fragment key={index}>{item}</React.Fragment>
	));
};

const AutoComplete = ({ placeholder, onSelect }) => {
	const { handleChange, searchResult, value, handleSelect } = useAutoComplete();

	const getYear = (item) => new Date(item.release_date || item.first_air_date).getFullYear();

	const handleAutoCompleteSelect = (item) => {
		handleSelect(item);
		onSelect(item);
	};

	const isActive = searchResult.length > 0;

	return (
		<section>
			<Container>
				<Input placeholder={placeholder} onChange={handleChange} value={value} />
				{isActive && (
					<Ul>
						{searchResult.map((item, index) => (
							<li key={index}>
								<Button onClick={() => handleAutoCompleteSelect(item)}>
									<Title>
										<Highlight text={item.title || item.name} highlight={value} /> ({getYear(item)})
									</Title>
									<MetaData>{item.media_type}</MetaData>
								</Button>
							</li>
						))}
					</Ul>
				)}
			</Container>
		</section>
	);
};

export default AutoComplete;
