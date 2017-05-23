import moment from 'moment';
import validate from '../validate';

validate.validators.bool = value =>
  !validate.isBoolean(value) ? 'must be true or false' : null;

validate.validators.tagArray = value => {
  if (!validate.isArray(value)) return 'must be an array';
  let err = null;
  value.forEach(v => {
    if (!/^([a-zA-Z0-9]+ )*[a-zA-Z0-9]+$/.test(v))
      err = 'must contain only letters, numbers, and spaces';
  });
  return err;
};

export const bool = { bool: true };

export const datetime = {
  datetime: {
    earliest: moment.utc().subtract(25, 'years'),
    latest: moment.utc().add(25, 'years'),
    message: 'failed the range sanity check',
  },
};

export const tagArray = { tagArray: true };
