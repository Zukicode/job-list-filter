import React from 'react';
import ReactDOM from 'react-dom/client';

//Styles
import './styles/global.scss';

//Components
import { App } from './components/App/App';

//Redux
import { Provider } from 'react-redux';
import { store } from 'store/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
