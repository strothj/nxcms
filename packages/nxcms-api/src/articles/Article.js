import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  editor: { type: Schema.Types.ObjectId, required: true },

  publishDate: { type: Date, required: true },

  title: { type: String, required: true },

  headerImageURL: { type: String, required: true },

  headerImageAttributionURL: { type: String, required: true },

  headerImageAttributionText: { type: String, required: true },

  slug: { type: String, required: true, unique: true },

  category: { type: String, required: true },

  tags: { type: [String], required: true },

  synopsis: { type: String, required: true },

  youtubeVideoID: { type: String, required: true },

  content: { type: String, required: true },
});

const model = mongoose.model('Article', schema);

export default model;
