import React, { Component } from 'react';
import MainComponent from './MainComponent/MainComponent';
import 'normalize.css';
import './App.css';
import styled from 'styled-components';

const Main = styled.main`
	max-width: 500px;
	margin: 0 auto;
	padding: 0 2rem;
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Shareplay</h1>
				</header>
				<Main className="App-content">
					<MainComponent />
				</Main>
			</div>
		);
	}
}

export default App;
