/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Text, Textarea } from 'react-form';
import { actions } from 'store';
import validate from './validate';

class PostEditor extends Component {
  constructor(props) {
    super();
    this.state = { selectedArticle: props.match.params.id };
  }

  componentDidMount() {
    if (!this.props.articles) this.props.dispatch(actions.getArticles());
  }

  // eslint-disable-next-line
  onSubmit(values) {
    console.log(values); // eslint-disable-line no-console
  }

  loadArticle = () => {
    if (!this.state.selectedArticle) return {};
    return {
      values: this.props.articles.find(
        a => a._id === this.state.selectedArticle
      ),
    };
  };

  render() {
    if (!this.props.articles) return <div />;
    return (
      <Form
        loadState={this.loadArticle}
        onSubmit={this.onSubmit}
        validate={validate}
      >
        {({ submitForm }) => (
          <form onSubmit={submitForm}>
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
            <br />{JSON.stringify(this.props.location)}
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    );
  }
}

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(PostEditor);
