/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tab from 'material-ui/Tabs/Tab';

import { actions } from 'store';
import Container from 'components/Container';
import DockedTabs from './DockedTabs';
import Form from './Form';
import validate from './validate';
import { nullEmpties, removeEmpties } from './cleanValues';

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

  onSubmit = async values => {
    await this.props.dispatch(actions.editArticle(nullEmpties(values)));
    this.setState({ hasMutations: false });
    this.props.history.push('/dashboard/posts');
  };

  loadInitialValues = () => {
    if (!this.state.selectedArticle) return {};
    return removeEmpties(
      this.props.articles.find(a => a._id === this.state.selectedArticle)
    );
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
      <DockedTabs>
        <Tab label="Edit">
          <article>
            <Container>
              <Form
                defaultValues={this.loadInitialValues()}
                onSubmit={this.onSubmit}
                onChange={this.markPendingChanges}
                validate={validate}
                initiallyOpenInfoSection={!this.state.selectedArticle}
                hasMutations={this.state.hasMutations}
              />
            </Container>
          </article>
        </Tab>
        <Tab label="Preview">
          test
        </Tab>
      </DockedTabs>
    );
  }
}

const mapStateToProps = ({ articles, editArticleError }) => ({
  articles,
  errorMessage: editArticleError,
});

export default connect(mapStateToProps)(PostEditor);
