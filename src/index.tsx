import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './assets/themes/Theme';
import './assets/styles/App.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

