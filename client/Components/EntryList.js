import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOne, deleteNote, editPost } from '../actions/entryAction';
/**
   * Display entries
   * @class
   * @returns {null} Returns null
   * */
class EntryList extends Component {
  /**
 * @param {props} props Representing some data passed down
 */
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * @function
   * @param {event} event
   * @returns { null} null
   */
  handleEdit(event) {
    event.preventDefault();
    this.props.editPost(this.props.entry.id, this.props.history);
  }

  /**
   * @function
   * @param {event} event
   * @returns { null} null
   */
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteNote(this.props.entry.id, this.props.history);
  }

  /**
 *Renders web page
 * @returns {Webpage} Displays the webpage
 */
  render() {
    return (
      <div className="well">
        <p>{ this.props.entry.body } </p>
        <br />
        <button className="btn btn-primary" onClick ={ this.handleEdit }>Edit</button>
        <button className="btn btn-primary" onClick ={ this.handleDelete }>Delete</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  entries: state.entries
});
export default connect(mapStateToProps,
  { getOne,deleteNote, editPost })(withRouter(EntryList));
