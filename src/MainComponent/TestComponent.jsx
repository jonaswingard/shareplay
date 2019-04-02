import React from 'react';
import { useStateValue } from '../StateProvider';

const TestComponent = () => {
  const [{ theme }, dispatch] = useStateValue();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'addItem',
            newItem: { title: 'foobar' }
          })
        }
      >
        Add item
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: 'changeTheme',
            newTheme: { primary: 'blue' }
          })
        }
      >
        Make me blue!
      </button>
      <div>{theme.primary}</div>
    </div>
  );
};

export default TestComponent;
