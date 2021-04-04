import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("Content render");

    return (
      <article className="Article">
        <h2>Create</h2>
        <p>
          <form action="/create_process" method="post"
          onSubmit={function(e) {
            e.preventdefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
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
        </p>
      </article>
    );
  }
}

export default CreateContent;
