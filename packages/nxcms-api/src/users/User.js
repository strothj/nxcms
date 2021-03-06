import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import validate from 'validate.js';
import * as validation from './userValidation';

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
    validate: { validator: v => !validate.single(v, validation.username) },
  },

  password: {
    type: String,
    required: true,
    minlength: 60, // bcrypt hash length
    maxlength: 60,
  },

  email: {
    type: String,
    unique: true,
    uniqueCaseInsensitive: true,
  },

  firstName: {
    type: String,
    minlength: 1,
  },

  lastName: {
    type: String,
    minlength: 1,
  },

  displayNameUse: {
    type: String,
    required: true,
    enum: ['name', 'username', 'email'],
  },

  isAdmin: {
    type: Boolean,
    required: true,
  },
});

userSchema.plugin(uniqueValidator);

const model = mongoose.model('User', userSchema);

export default model;
