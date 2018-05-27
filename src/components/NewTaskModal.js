import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './NewTaskModal.css';

class NewTaskModal extends Component {
    state = {
        open: false
      };
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

      setTask = () => {
        let header = document.getElementById("task-name").value;
        let description = document.getElementById("description").value;
        let priority = document.querySelector('input[name="priority"]:checked').value;
        this.props.callbackFromParent(header, description, priority);
        this.onCloseModal();
      }

      render() {
        const { open } = this.state;
        return (
          <div>
            <button className="btn btn-main btn-primary" onClick={this.onOpenModal}>
              New Task
            </button>
            <Modal open={open} onClose={this.onCloseModal}  center>           
            <div className="form-group">
            <label>Task Name:</label>
              <input type="text" className="form-control" id="task-name"/>
            </div>
            <div className="form-group">
            <label>Description:</label>
            <textarea className="form-control" rows="5" id="description"></textarea>
            </div>           
            <div className="radios">
            <label>Priority:{'\u00A0'}{'\u00A0'}</label>
            <input type="radio" name="priority" value="high" /> High {'\u00A0'}
            <input type="radio" name="priority" value="medium" defaultChecked /> Medium {'\u00A0'}
            <input type="radio" name="priority" value="low" /> Low
            </div>           
            <div className="centered-button">
            <button type="button" className="btn btn-lg btn-outline-primary"  onClick={this.setTask}>Create Task</button>
            </div>          
            </Modal>
          </div>
        );
      }
}

export default NewTaskModal;