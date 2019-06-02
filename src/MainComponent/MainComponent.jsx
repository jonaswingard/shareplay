import React from 'react';
import List from './List';
import Form from './Form';
import { StateProvider } from '../StateProvider';

const LOCALSTORAGE_KEY = 'shareplay';

const loadItems = () => JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];

const MainComponent = () => {
	const initialState = {
		items: loadItems()
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case 'addItem':
				return {
					...state,
					items: [...state.items, action.newItem]
				};

			case 'saveItems':
				localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state.items));
				return state;

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
