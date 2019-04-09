import React, { useState, useEffect } from "react";
import result from "./result.json";
import styled from "styled-components";

const Ul = styled.ul`
  display: inline-block;
  text-align: left;
`;
const ItemContent = styled.span`
  display: flex;
`;
const Title = styled.span`
  margin-right: 3rem;
`;
const MetaData = styled.span`
  margin-left: auto;
`;

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useFoobar = params => {
  const [foo, setFoo] = useState("");

  const handleChange = params => {
    console.log("changes be handled");
    setFoo(params);
  };

  return { handleChange, foo };
};

const Lab = props => {
  const [searchResult, setSearchResult] = useState([]);

  const updateSearchResult = query => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.REACT_APP_API_KEY
    }&query=${query}`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => setSearchResult(result.results),
        error => console.log(error)
      );
  };

  useEffect(() => {
    setSearchResult(result.results);
  }, []);

  const { handleChange, foo } = useFoobar();

  const handleChange2 = event => {
    const value = event.target.value;
    if (value.length >= 3) {
      handleChange(value);
      // updateSearchResult(value);
      // const x = useSearchResult("foob");
      // console.log(x);
    }
  };

  const getTitle = item => item.title || item.name;

  const getYear = item =>
    new Date(item.release_date || item.first_air_date).getFullYear();

  return (
    <div>
      <div>
        <input onChange={handleChange2} />
        <div>{foo}</div>
        <button onClick={() => useFoobar("sfasd")}>Test</button>
      </div>
      <Ul>
        {searchResult.map((item, index) => (
          <li key={index}>
            <ItemContent>
              <Title>{getTitle(item)}</Title>
              <MetaData>
                {item.media_type} | {getYear(item)}
              </MetaData>
            </ItemContent>
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default Lab;
