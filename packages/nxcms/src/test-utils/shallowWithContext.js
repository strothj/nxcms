// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();
const shallowWithContext = node => shallow(node, { context: { muiTheme } });

export default shallowWithContext;
