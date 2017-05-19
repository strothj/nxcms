/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { Form, Text, Textarea } from 'react-form';
import { actions } from 'store';
import validate from './validate';

class PostEditor extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedArticle: props.match.params.id,
      hasMutations: false,
    };
  }

  componentDidMount() {
    if (!this.props.articles) this.props.dispatch(actions.getArticles());
  }

  // eslint-disable-next-line
  onSubmit = async (values) => {
    // console.log(values); // eslint-disable-line no-console
    try {
      await this.props.dispatch(actions.editArticle(values));
      this.setState({ hasMutations: false });
      this.props.history.push('/dashboard/posts');
    } catch (e) {
      console.log(e); // eslint-disable-line no-console
    }
  }

  loadInitialValues = () => {
    if (!this.state.selectedArticle) return {};
    return this.props.articles.find(a => a._id === this.state.selectedArticle);
  };

  removeEmptyFields = values => {
    Object.keys(values).forEach(k => {
      if (!values[k]) delete values[k]; // eslint-disable-line no-param-reassign
    });
    return values;
  };

  markPendingChanges = (state, props, initial) => {
    if (initial === true) return;
    let hasMutations = false;
    Object.keys(state.values).forEach(f => {
      if (state.values[f] !== initial.defaultValues[f]) hasMutations = true;
    });
    this.setState({ hasMutations });
  };

  render() {
    if (!this.props.articles) return <div />;
    return (
      <Form
        defaultValues={this.loadInitialValues()}
        onSubmit={this.onSubmit}
        onChange={this.markPendingChanges}
        validate={validate}
      >
        {({ submitForm }) => (
          <div>
            {this.state.hasMutations &&
              <Prompt message="You have unsaved changes, are you sure you want to leave?" />}

            <form onSubmit={submitForm}>
              {this.props.errorMessage &&
                <p>Error: {this.props.errorMessage}</p>}
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
              <button type="submit" disabled={!this.state.hasMutations}>
                Submit
              </button>
            </form>
          </div>
        )}
      </Form>
    );
  }
}

const mapStateToProps = ({ articles, editArticleError }) => ({
  articles,
  errorMessage: editArticleError,
});

export default connect(mapStateToProps)(PostEditor);
