import React, {Component} from 'react';
import styled from "styled-components";
import {restart} from '../render'


const StayledParticipants = styled.div`
position: absolute;
margin-left: 38%;
top: 28%;
  width: 340px;

  z-index: 3;
`;


class TaskNotFulfilled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TasksToPerform:props.TasksToPerform,
      nam:props.namesParticipants,
      showParticipants: false
    };
    let participantsName = <div></div>
    let txt=''
  }
  addTask=(task_N)=>{
    this.setState({
      showParticipants: true,
      task_N: task_N
    })
  }

  selectParticipantName=(name)=>{
    this.props.futureUser(this.state.task_N, name)
    this.setState({
      showParticipants: false,
      task_N: ""
    })

  }

  render(){
    this.participantsName = this.props.namesParticipants.map(tt=><div key={tt.id}><li className="collection-item" ><div ><div style={{marginTop: 20+"px",}}>{tt.name}</div><div onClick={()=>this.selectParticipantName(tt.name)}><a  className="secondary-content"><i style={{marginBottom: 4+"px"}} className="material-icons">send</i></a></div></div></li></div>)

    let participants =(this.state.showParticipants)? <StayledParticipants>
    <ul className="collection with-header">
    <li className="collection-header"><h4>Participants</h4></li>
    {this.participantsName}
    </ul>
    </StayledParticipants>: <div></div>

    let tasks = this.props.TasksToPerform.map(tt=> <div key={tt.id}>
      <div className="row"><div className="col s12 m6"><div className="card blue-grey darken-1">
      <div className="card-content white-text">
      <span style={{color: "#c19a82"}} className="card-title">A task</span>
      <p>{tt.taskTxt}</p>
      </div>
      <div className="card-action">
      <a style={{cursor: "pointer"}}><div onClick={ ()=>this.addTask(tt.taskTxt)}>Performing Person</div></a>
      </div></div></div></div></div>)
    return(
      <div>
      {participants}
      {tasks}
      </div>
    )
  }
}



export default TaskNotFulfilled ;
