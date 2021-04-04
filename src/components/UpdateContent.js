import React, { Component } from "react";

class UpdateContent extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log('=====> TOC render shouldComponentUpdate'
    , newProps.data
    , this.props.data);
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
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
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
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
