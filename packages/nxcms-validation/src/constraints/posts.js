import { bool, datetime } from './validators';

const editor = { length: { is: 24 } }; // Mongoose ID hex length

const isPublished = { bool };

const publishDate = { datetime };

export default [editor, isPublished, publishDate].map(c => ({
  ...c,
  presence: true,
}));
