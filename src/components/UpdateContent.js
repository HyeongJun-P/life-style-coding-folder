import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  } 
  inputFormHandler(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    console.log("Content render");
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/Update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"
            value={this.state.title}
            onChange={this.inputFormHandler}></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"
            value={this.state.desc}
            onChange={this.inputFormHandler}></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
