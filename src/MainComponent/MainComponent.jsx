import React from "react";
import List from "./List";
import Form from "./Form";
import { StateProvider } from "../StateProvider";

const MainComponent = () => {
  const initialState = {
    items: [
      { title: "foo", tags: ["lorem"] },
      { title: "bar", tags: ["ipsum", "dolor"] }
    ]
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeTheme":
        return {
          ...state,
          theme: action.newTheme
        };

      case "addItem":
        return {
          ...state,
          items: [...state.items, action.newItem]
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div>
        <List />
        <Form />
      </div>
    </StateProvider>
  );
};

export default MainComponent;
