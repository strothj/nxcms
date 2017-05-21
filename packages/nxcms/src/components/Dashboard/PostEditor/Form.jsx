import React from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { Form as ReactForm } from 'react-form';

import SplitContainer from 'components/SplitContainer';
import ToggleSection from './ToggleSection';
import {
  TextField,
  SlugField,
  PublishDateField,
  EditorSelectField,
  TagsField,
  TextArea,
  PostContentField,
} from './fields';

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

            <SplitContainer
              itemsLeft={[
                <TextField field="title" floatingLabelText="Title" />,
                <SlugField titleValue={getValue('title')} />,
              ]}
              itemsRight={[
                <PublishDateField />,
                <EditorSelectField isAdmin={props.isAdmin} />,
              ]}
            />

            <SplitContainer
              itemsLeft={[
                <TextField
                  field="headerImageURL"
                  floatingLabelText="Header Image URL"
                />,
              ]}
              itemsRight={[
                <TextField
                  field="headerImageAttributionURL"
                  floatingLabelText="Header Image Attribution URL"
                />,
                <TextField
                  field="headerImageAttributionText"
                  floatingLabelText="Header Image Attribution Text"
                />,
              ]}
            />

            <SplitContainer
              itemsLeft={[
                <TagsField />,
                <TextField field="category" floatingLabelText="Category" />,
              ]}
              itemsRight={[
                <TextField
                  field="youtubeVideoID"
                  floatingLabelText="Youtube Video ID"
                />,
                <TextArea field="synopsis" floatingLabelText="Synopsis" />,
              ]}
            />

          </ToggleSection>

          <ToggleSection label="Post Content" initiallyOpen>
            <PostContentField />
          </ToggleSection>
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
