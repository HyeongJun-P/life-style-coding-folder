import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      selected_content_id: 2,
      mode: "welcome",
      subject: { title: "Web", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interactive" },
      ],
    };
  }
  render() {
    console.log("App render");

    let _title,
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title,_desc) {
        this.max_content_id = this.max_content_id + 1;
       // this.State.contents.push({id:this.max_content_id, title:_title, desc:_desc});
       
      //   let _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc})
      //   this.setState({
      //     contents:_contents
      //   });
      // }.bind(this)}></CreateContent>

      let newContents = Array.from(this.state.contents);
      newContents.push({id:this.max_content_id, title:_title, desc:_desc});
      this.setState({
        contents:newContents
      });
      }.bind(this)}></CreateContent>
    }

    
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
              selected_content_id: 0,
            });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}
export default App;
