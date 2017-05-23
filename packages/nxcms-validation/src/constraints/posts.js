import { bool, datetime, tagArray } from './validators';

const category = {
  format: {
    // Matches patterns like "Word & Word", "Word-Word Some & thing"
    pattern: /^([a-zA-Z]+(-[a-zA-Z]+)? (& )?)*[a-zA-Z]+(-[a-zA-Z]+)?$/,
    message: 'can only contain letters, hyphens, and ampersands',
  },
  length: { minimum: 2, maximum: 30 },
};

const content = { length: { minimum: 10, maximum: 10000 } };

const editor = { length: { is: 24 } }; // Mongoose ID hex length

const headerImageAttributionURL = { url: true };

const headerImageAttributionText = { length: { maximum: 30 } };

const headerImageURL = { url: true };

const isPublished = { bool };

const publishDate = { datetime };

const slug = {
  format: { pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ },
  length: { minimum: 4, maximum: 200 },
};

const synopsis = { length: { maximum: 500 } };

const tags = { tags: tagArray };

const title = { length: { minimum: 4, maximum: 100 } };

const youtubeVideoID = { length: { maximum: 30 } };

export default [
  category,
  content,
  editor,
  headerImageAttributionURL,
  headerImageAttributionText,
  headerImageURL,
  isPublished,
  publishDate,
  slug,
  synopsis,
  tags,
  title,
  youtubeVideoID,
].map(c => ({
  ...c,
  presence: true,
}));
