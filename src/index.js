import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* React Route */
import { BrowserRouter } from 'react-router-dom'

/* Custom Theme */
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/custom-theme';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
