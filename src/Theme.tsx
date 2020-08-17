import React, { ReactNode } from 'react';

import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import amber from '@material-ui/core/colors/amber';

const defaultPrimary = '#2d9bdb';

type ThemeProps = {
  children: ReactNode;
};

const Theme: React.FC<ThemeProps> = ({
  children
}) => {
  const createTheme = () => {
    const defaultTheme = {
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(','),
        subtitle2: {
          fontWeight: 200
        }
      },
      palette: {
        primary: defaultPrimary,
        secondary: amber,
        grey: {
          button: '#efefef',
          inputBackground: 'rgba(255, 255, 255, 0.25)',
          scrollFormHeading: 'rgba(0, 0, 0, 0.54)',
          scrollFormBorder: `1px solid rgba(0, 0, 0, 0.1)`,
          scrollFormInteractiveElt: 'rgb(218, 218, 218)',
          scrollFormInteractiveEltHov: 'rgb(190, 190, 190)',
          buttonDark: '#dadada'
        },
        tertiary: {
          main: '#e24f21',
          600: '#cc481f'
        }
      }
    };
    try {
      return createMuiTheme(defaultTheme as ThemeOptions);
    } catch (err) {
      console.error(err.toString());
      return createMuiTheme(defaultTheme as ThemeOptions);
    }
  };
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
