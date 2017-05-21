import validate from 'validate.js';
import { nullEmpties } from './cleanValues';

const singleWord = /^[a-z]+$/;

validate.validators.tags = value => {
  if (!value) return null;
  if (!validate.isArray(value)) return 'must be an array';
  if (value.length === 0) return 'can not be empty';
  for (let i = 0; i < value.length; i += 1) {
    if (!singleWord.test(value[i]))
      return 'must be single words with letters only';
  }
  return null;
};

const editor = { length: { is: 24 }, presence: true }; // Mongoose ID hex length

const publishDate = {};

const title = { length: { minimum: 4, maximum: 100 }, presence: true };

const headerImageURL = { url: true, presence: true };

const headerImageAttributionURL = { url: true };

const headerImageAttributionText = {
  length: { minimum: 4, maximum: 30 },
};

const slug = {
  format: {
    pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    message: 'can only contain lowercase letters, numbers, and dashes',
  },
  length: { maximum: 200 },
  presence: true,
};

const category = {
  format: { pattern: singleWord },
  length: { minimum: 4, maximum: 30 },
  presence: true,
};

const tags = {
  tags: true,
};

const synopsis = { length: { minimum: 4, maximum: 500 } };

const youtubeVideoID = { length: { minimum: 4, maximum: 30 } };

const content = { length: { minimum: 10 }, presence: true };

const constraints = {
  editor,
  publishDate,
  title,
  headerImageURL,
  headerImageAttributionURL,
  headerImageAttributionText,
  slug,
  category,
  tags,
  synopsis,
  youtubeVideoID,
  content,
};

export default values => {
  const cleanedValues = nullEmpties(values);
  const errors = {};
  Object.entries(validate(cleanedValues, constraints) || {}).forEach(kv => {
    // Flatten returned validation error arrays
    errors[kv[0]] = kv[1][0];
  });
  return errors;
};
