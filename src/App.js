import React, { Component } from 'react';
import './App.scss';
import SearchBox from './components/SearchBox';
import ToDoItem from './components/ToDoItem';

class App extends Component {

  state = {
    items: []
  }

  addToDo = (todoItem) => {
    const itemsArray = this.state.items;
      itemsArray.push(todoItem);
      todoItem.index = new Date().getTime();
      this.setState({items: itemsArray});
  }

  updateToDo = (isChecked, elIndex) => {
    let changedItem = this.state.items;
    changedItem = changedItem.map(function(item) {
      if(item.index === elIndex) {
        item.done = isChecked;
      }
      return item;
    });

    this.setState({items: changedItem});
  }

  removeToDo = (elIndex) => {
    let itemsArray = this.state.items;
    itemsArray = itemsArray.filter(function(item) {
      return item.index !== elIndex
    });
    this.setState({items: itemsArray});
  }

  componentDidMount() {
    if(localStorage.getItem("list")) {
      this.setState({items: JSON.parse(localStorage.getItem("list"))});
    }
  }

  componentDidUpdate() {
    localStorage.setItem("list", JSON.stringify(this.state.items));
  }

  render() {
    const today = new Date().toDateString();
    return (
      <div className="App">
        <h1>To-Do | {today}</h1>
        <SearchBox addToDo={this.addToDo} items={this.state.items}></SearchBox>
        <ul className="list-parent">
          <ToDoItem updateToDo={this.updateToDo} removeToDo={this.removeToDo} items={this.state.items}></ToDoItem>
        </ul>
      </div>
    );
  }
}

export default App;
