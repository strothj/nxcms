import moment from 'moment';
import validate from '../validate';

validate.validators.bool = value =>
  !validate.isBoolean(value) ? 'must be true or false' : null;

export const bool = { bool: true };

export const datetime = {
  datetime: {
    earliest: moment.utc().subtract(25, 'years'),
    latest: moment.utc().add(25, 'years'),
    message: 'failed the range sanity check',
  },
};
