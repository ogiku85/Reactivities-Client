import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';
// import * as s from 'semantic-ui-react/src';
// import {Icon} from 'semantic-ui-react';

class App extends Component{
  state={
    values:[]
  };
  componentDidMount(){
    axios.get('http://localhost:5000/api/values').then((response) =>{
      this.setState({
        values: response.data
      });
    });
    this.setState(
      {
        values: [{id:1, name: 'Value 101'},{id:2, name: 'Value 102'}]
      });
  }
  render(){
    return (
      <div>
        <h1>Working</h1>
          <Header as='h2'>
            <Icon name='users' />
            <Header.Content>Reactivities</Header.Content>
          </Header>
          <List>
            {this.state.values.map((value : {id:number, name: string}) => {
                return <List.Item key={value.id}>{value.name}</List.Item>
              })}
          </List>
      </div>
    );
  }
}

export default App;

