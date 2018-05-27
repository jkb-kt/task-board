import React, {Component} from 'react';
import Task from '../components/Task'

class Tasks extends Component {

        deleteCurrentTask = (event) => {
            this.props.delete(event.target.id);
        }

        render() {
          const newTasks =  this.props.task.map((item, index) => {
                return <Task key={index} index={index} header={item.header} description={item.description} 
                             priority={item.priority} delete={this.deleteCurrentTask} />
            });
        return newTasks;}

       }

export default Tasks;