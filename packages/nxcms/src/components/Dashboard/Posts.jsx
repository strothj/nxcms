/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { actions } from 'store';

class Posts extends Component {
  componentDidMount() {
    if (!this.props.articles) {
      this.props.dispatch(actions.getArticles());
    }
    if (this.props.profile.isAdmin && !this.props.users) {
      this.props.dispatch(actions.getUsers());
    }
    this.setSelected([]);
  }

  getUsernameFromArticleID = id => {
    if (!this.props.users) return '';
    const user = this.props.users.find(u => u._id === id);
    return user ? user.username : 'Unassigned';
  };

  setSelected = selectedRows => {
    this.props.dispatch(
      actions.selectArticle(
        selectedRows.length === 0
          ? null
          : this.props.articles[selectedRows[0]]._id
      )
    );
  };

  render() {
    return (
      <Table onRowSelection={this.setSelected}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Publish Date</TableHeaderColumn>
            {this.props.profile.isAdmin &&
              <TableHeaderColumn>Editor</TableHeaderColumn>}
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Slug</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
          {this.props.articles &&
            this.props.articles.map(a => (
              <TableRow key={a._id}>
                <TableRowColumn>
                  {a.publishDate || 'Unpublished'}
                </TableRowColumn>
                {this.props.profile.isAdmin &&
                  <TableRowColumn>
                    {this.getUsernameFromArticleID(a.editor)}
                  </TableRowColumn>}
                <TableRowColumn>{a.title}</TableRowColumn>
                <TableRowColumn>{a.slug}</TableRowColumn>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = ({ articles, profile, users }) => ({
  articles,
  profile,
  users,
});

export default connect(mapStateToProps)(Posts);
