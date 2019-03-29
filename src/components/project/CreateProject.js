import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectActions';
import {connect} from 'react-redux';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {
    return (
      <div>
        <div className="container">
            <form onSubmit = {this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create new project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id ="title" onChange = {this.handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea  id="content" className="materialize-textarea"  onChange = {this.handleChange}></textarea>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject : (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject) ;
// Conncect() receive  "stateToProps", "dispatchToProps"

