import React, { Component } from 'react';
import './App.css';
import Tasks from './containers/Tasks';
import NewTaskModal from './components/NewTaskModal';

class App extends Component {

  state = {
    newTask: []
  };

  // Probably should not be done this way..
  setTask = (header, description, priority) => {
    let taskArray = [...this.state.newTask];
    taskArray.push({header: header, description: description, priority: priority})
    this.setState({newTask: taskArray});
  }

  deleteTask = (e) => {
    let taskArray = [...this.state.newTask];
    taskArray.splice(e, 1);
    this.setState({newTask: taskArray});
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to Your Task Board!</h1>
      <NewTaskModal callbackFromParent={this.setTask}/>
      <Tasks task={this.state.newTask} delete={this.deleteTask} />
      </div>
    );
  }


}

export default App;
