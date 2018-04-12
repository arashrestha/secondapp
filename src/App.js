import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


import User from './User'
import { Drawer } from 'material-ui';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "open": false,
    };
  }
  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    return (
      <MuiThemeProvider>
      <AppBar
      title="Aarash"
      iconClassNameRight="muidocs-icon-navigation-expand-more" 
      onLeftIconButtonClick={this.handleToggle}
            />

      <Drawer
        open={this.state.open}
        onRequestChange={(open)=> this.setState({open})}>
        <AppBar title = "It's Open!"
        onLeftIconButtonClick={this.handleToggle}
        />
      </Drawer>
        <div className="App">
        <User firstName = {firstName} lastName= {lastName} />

      </div>
    </MuiThemeProvider>
      
    );
  }
}

const firstName = "Aarash"
const lastName = " Shrestha";

export default App;