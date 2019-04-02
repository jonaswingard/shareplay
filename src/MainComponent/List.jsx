import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';

const Ul = styled.ul`
  margin: 0 auto 2rem;
  width: 15rem;
`;

const Li = styled.li`
  text-align: left;
`;

const Span = styled.span`
  margin-left: 2rem;
  color: gray;
`;

const List = () => {
  const [{ items }] = useStateValue();

  return (
    <div>
      <Ul>
        {items.map((item, index) => (
          <Li key={index}>
            {item.title}
            <Span>{item.tags && item.tags.join(', ')}</Span>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default List;
