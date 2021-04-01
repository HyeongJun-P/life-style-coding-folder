import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      subject:{title:"Web", sub:"World Wide Web!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }
   render() {
     return (
       <div className="App">
         Hello, React!!
         <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
         <TOC data={this.state.contents}></TOC>
         <Subject></Subject>
         <Content title="HTML" desc="HTML is HyperText Markup Language 5"></Content>
       </div>
     );
   }
}

export default App;
