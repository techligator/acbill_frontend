import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ToggleColorMode() {
  const [mode, setMode] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set a delay of 1 second for the loading animation
    return () => clearTimeout(timeout);
  }, []);

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <MyApp isLoading={isLoading} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function MyApp({ isLoading }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        width: '100%',
        // height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // opacity: isLoading ? 0 : 1,
        // transition: 'opacity 0.5s ease-in-out',

      }}
    >
      <div
      className='header' 
      style={{     
        backgroundColor: '#d1d1ff',
        color: 'black',
        position: 'fixed',  
        width: '100%',
        top: 0,             
        left: 0,        
        zIndex: 1000,       
        boxShadow: theme.palette.mode === 'dark' ? '0px 0px 10px rgba(255, 255, 255, 0.1)' : '0px 0px 10px rgba(0, 0, 0, 0.1)',}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0% 5%' }}>
      <a href="https://techligator.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src="./logo.png" alt="logo" width='50px' style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }} />
      </a>
          <h1 className='larger-screen-heading' style={{textAlign: 'center', margin: '0px 0px'}}>AC Consumption and AC Calculator</h1>

          <div className='logo-and-heading'>
            <h4><a href="https://techligator.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a></h4>&nbsp;&nbsp;&nbsp;
            <h4><a href="https://techligator.com/#about" target="_blank" rel="noopener noreferrer"  style={{ textDecoration: 'none', color: 'inherit' }}>About</a></h4>&nbsp;&nbsp;&nbsp;
            <h4><a href="https://techligator.com/#contact" target="_blank" rel="noopener noreferrer"  style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a></h4>&nbsp;&nbsp;&nbsp;
            <IconButton sx={{ ml: 1, opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
      </div>
      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0% 3%' }}>
        <h1>
          <span>AC</span>
          <span>&nbsp;&nbsp;</span>
          <span>Consumption</span>
          <span>&nbsp;&nbsp;</span>
          <span>and</span>
          <span>&nbsp;&nbsp;</span>
          <span>Cost</span>
          <span>&nbsp;&nbsp;</span>
          <span>Calculator</span>
        </h1>
       </div> */}
       <h1 className='smaller-screen-heading' style={{textAlign: 'center', margin: '0px 0px'}}>AC Consumption and AC Calculator</h1>
       </div>       
        <App className='main-app-content' />
    </Box>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
