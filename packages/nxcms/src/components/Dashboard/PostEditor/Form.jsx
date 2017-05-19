import React from 'react';
import { Prompt } from 'react-router-dom';
import { Form as ReactForm, Text, Textarea } from 'react-form';

const Form = props => (
  <ReactForm
    defaultValues={props.defaultValues}
    onSubmit={props.onSubmit}
    onChange={props.onChange}
    validate={props.validate}
  >
    {({ submitForm }) => (
      <div>
        {props.hasMutations &&
          <Prompt message="You have unsaved changes, are you sure you want to leave?" />}

        <form onSubmit={submitForm}>
          {props.errorMessage && <p>Error: {props.errorMessage}</p>}
          Title: <Text field="title" />
          Slug: <Text field="slug" />
          Publish Date: <Text field="publishDate" />
          Editor: <Text field="editor" />
          Header Image URL: <Text field="headerImageURL" />
          Header Image Attribution URL:
          <Text field="headerImageAttributionURL" />
          Header Image Attribution Text:
          <Text field="headerImageAttributionText" />
          Tags: <Text field="tags" />
          Category: <Text field="category" />
          Synopsis: <Text field="synopsis" />
          Youtube ID: <Text field="youtubeVideoID" />
          Content: <Textarea field="content" />
          <button type="submit" disabled={!props.hasMutations}>
            Submit
          </button>
        </form>
      </div>
    )}
  </ReactForm>
);

export default Form;
