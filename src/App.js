import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected_content_id:2,
      mode:'welcome',
      subject:{title:"Web", sub:"World Wide Web!"},
        welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }
   render() {
     console.log('App render');

    let _title, _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    let i = 0;

    while(i < this.state.contents.length) {
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id)  {
        _title = data.title;
        _desc = data.desc;
        break;
      }
      i++;
    }
    console.log('render',this);
     return (
       <div className="App">
         <Subject title={this.state.subject.title}
                  sub={this.state.subject.sub}
                  onChangePage={function() {
                    this.setState({
                      mode:'welcome' 
                    });}.bind(this)}
         ></Subject>
         {/* <header>
          <h1><a href="/" onClick={function(e) 
            console.log('event in', this);
            e.preventDefault();
            console.log(e);
            e.preventDefault();
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
         <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });}.bind(this)}
        
         data={this.state.contents}></TOC>
         <Content title={_title} desc={_desc}></Content>
       </div>
     );
   }
  }

export default App;
