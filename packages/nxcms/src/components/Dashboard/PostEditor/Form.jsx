import React from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { Form as ReactForm, Text, Textarea } from 'react-form';
import SplitContainer from '../../SplitContainer';
import ToggleSection from './ToggleSection';
import TextField from './TextField';
import SlugField from './SlugField';
import PublishDateField from './PublishDateField';
import EditorSelectField from './EditorSelectField';
import TagsField from './TagsField';

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
                <TextField field="title" floatingLabelText="Title" />
                <SlugField titleValue={getValue('title')} />
              </div>
              <div>
                <PublishDateField />
                <EditorSelectField isAdmin={props.isAdmin} />
              </div>
            </SplitContainer>

            <TextField
              field="headerImageURL"
              floatingLabelText="Header Image URL"
            />

            <TextField
              field="headerImageAttributionURL"
              floatingLabelText="Header Image Attribution URL"
            />

            <TextField
              field="headerImageAttributionText"
              floatingLabelText="Header Image Attribution Text"
            />

            <TagsField />
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

const mapStateToProps = ({ profile }) => ({ isAdmin: profile.isAdmin });

export default connect(mapStateToProps)(Form);
