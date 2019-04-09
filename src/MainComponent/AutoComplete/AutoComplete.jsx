import React from "react";
import styled from "styled-components";
import useAutoComplete from "./useAutoComplete";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  const { handleChange, clear, searchResult } = useAutoComplete();
  const getTitle = item => item.title || item.name;
  const getYear = item =>
    new Date(item.release_date || item.first_air_date).getFullYear();

  const handleSelect = item => {
    clear();
    onSelect(item);
  };

  return (
    <section>
      <div>
        <Input onChange={handleChange} placeholder={placeholder} />
      </div>
      <Ul>
        {searchResult.map((item, index) => (
          <li key={index}>
            <Button onClick={() => handleSelect(item)}>
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
