import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';
import App from './components/App';

ReactDOM.render(
	<Providers>
		<App />
	</Providers>
	, document.querySelector('#root'));