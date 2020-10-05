import React, {Component} from 'react';
import styled from "styled-components";


const VerticalDistribution = styled.div`
  width: 440px;
`;

class TasksInProgress extends React.Component {

  endTask=(Txt)=>{
    this.props.CompletedTask(Txt)
  }

  render(){
    let tasksInProgress = this.props.currentTasksToBeCompleted.map((tt, k)=><div key={tt.id}>
    <div className="row"><div className="col s12 m6"><div className="card blue-grey darken-1">
    <div className="card-content white-text">
    <span style={{color: "#c19a82"}} className="card-title">A task</span>
    <p>{tt.taskTxt} </p>
    </div>
    <div className="card-action">
    <div style={{cursor: "pointer"}} key={(tt.toString())+'t'} onClick={ ()=>this.endTask(tt.taskTxt)}>{tt.name}
    <i className="small material-icons">library_books</i></div>
    </div></div></div></div></div>)

    return(
      <div>
      <VerticalDistribution>
      <div className="collection">
      <a  className="collection-item">. <h5>In The Process</h5></a>
      </div>
      </VerticalDistribution>
      {tasksInProgress}

      </div>
    )
  }
}

export default TasksInProgress ;
