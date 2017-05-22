import validate from 'validate.js';
import moment from 'moment';

validate.extend(validate.validators.datetime, {
  parse: value => +moment.utc(value),
  format: value => moment.utc(value).toISOString(),
});

export default validate;
