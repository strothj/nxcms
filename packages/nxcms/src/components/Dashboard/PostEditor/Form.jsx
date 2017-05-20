import React from 'react';
import { Prompt } from 'react-router-dom';
import { Form as ReactForm, Text, Textarea } from 'react-form';
import SplitContainer from '../../SplitContainer';
import ToggleSection from './ToggleSection';
import MaterialTextField from './MaterialTextField';
import SlugField from './SlugField';
import PublishDateField from './PublishDateField';

const Form = props => (
  <ReactForm
    defaultValues={props.defaultValues}
    onSubmit={props.onSubmit}
    onChange={props.onChange}
    validate={props.validate}
  >
    {({ submitForm, getValue }) => (
      <div>
        {props.hasMutations &&
          <Prompt message="You have unsaved changes, are you sure you want to leave?" />}

        <form onSubmit={submitForm}>
          <ToggleSection
            label="Post Info"
            initiallyOpen={props.initiallyOpenInfoSection}
          >
            {props.errorMessage && <p>Error: {props.errorMessage}</p>}

            <SplitContainer>
              <div>
                <MaterialTextField field="title" floatingLabelText="Title" />
                <SlugField titleValue={getValue('title')} />
              </div>
              <div>
                <PublishDateField />
                Editor: <Text field="editor" />
              </div>
            </SplitContainer>

            Header Image URL: <Text field="headerImageURL" />
            Header Image Attribution URL:
            <Text field="headerImageAttributionURL" />
            Header Image Attribution Text:
            <Text field="headerImageAttributionText" />
            Tags: <Text field="tags" />
            Category: <Text field="category" />
            Synopsis: <Text field="synopsis" />
            Youtube ID: <Text field="youtubeVideoID" />
          </ToggleSection>
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
