import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';

export default getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.blue500,
  },
  appBar: {
    color: colors.blueGrey900,
    height: 70,
  },
});
