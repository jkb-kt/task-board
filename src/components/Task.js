import React from "react";
import "./Task.css";

const task = (props) => {

  let taskPriority = props.priority;
  let priorityStyle;
  let priorityTextStyle;
  
  switch(taskPriority) {
    case "medium":
    priorityStyle = "bg-warning";
    priorityTextStyle = "text-white";
    break;

    case "high":
    priorityStyle = "bg-danger";
    priorityTextStyle = "text-white";
    break;

    case "low":
    priorityStyle = "bg-light";
    priorityTextStyle = "";
    break;

    default:
    priorityStyle = "bg-light";
    priorityTextStyle = "";
  }
  
  let finalStyle = priorityStyle + " card-content card mb-3 task-width " + priorityTextStyle;

    return (
    <div>
<div className={finalStyle}>
  <div className="card-header">{props.header}</div>
  <div className="card-body">
    <p className="card-text">{props.description}</p>
  </div>
  <div>
  <button type="button" id={props.index} className="btn btn-sm btn-success" onClick={props.delete} >Task Done</button>
  </div>
</div>       
    </div>
    );
}

export default task;