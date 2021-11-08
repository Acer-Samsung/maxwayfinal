import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {theme} from "./Components/CreateTheme";
import {ThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


