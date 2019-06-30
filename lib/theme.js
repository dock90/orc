import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#EF9A54' },
    secondary: { main: '#CB703A' },
    type: 'light',
  },
  typography: {
    fontFamily: [
      'Pridi Extralight',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export { theme };
