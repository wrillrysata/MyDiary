import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateNote,getOne } from "../actions/entryAction";
import Navbar from "./HeaderComponents/Navbar";

/**
 * @class
 */
class editComponent extends Component {
  /**
   * @param {props} props Representing some data passed down
   */
  constructor(props) {
    super(props);
    this.id = props.match.params.id;
    this.state = {
      note: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this)
  }

  /**
   * @function
   * @returns {null} null
   */
  componentDidMount() {
     this.props.getOne(this.id)
  }
  componentWillReceiveProps(nextProps){
   
    if(nextProps.entries.entry)
    {
      const note = nextProps.entries.entry.body
      this.setState({
        note
      })
    }
  }
 
  /**
   * @function
   * @param {event} event
   * @returns {null} null
   */
  handleUpdate(event) {
    event.preventDefault();
    const newNote = this.getMessage.value;
    this.props.updateNote(newNote, this.id);
  }
  handleCancel(event) {
    event.preventDefault();
    window.location.href = "/dashboard";
  }
  handleContentChange(event) {
    this.setState({
      note: event.target.value
    });
  }

  /**
   * @function
   * @returns {Webpage} webpage
   */
  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleUpdate}>
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            onChange={this.handleContentChange}
            value={this.state.note}
  
            cols="28"
          />
          <br></br>
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
        </form>
     
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entries
});
editComponent.propTypes = {
  entries:PropTypes.object.isRequired,
  updateNote: PropTypes.func.isRequired,
  getOne:PropTypes.func.isRequired,
}
export default connect(
  mapStateToProps,
  { updateNote, getOne }
)(withRouter(editComponent));
