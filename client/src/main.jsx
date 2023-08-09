import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  body: {
    darkColor: "rgba(32, 33, 36, 1)",
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
