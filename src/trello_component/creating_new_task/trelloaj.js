import React, {Component} from 'react';
import styled from "styled-components";
import Task from "../taskNotFulfilled"

const Width440 = styled.div`
  width: 440px;
`;
const ShowNewTask = styled.div`
cursor: pointer;
position: relative;
margin-left: 95%;
`;
const DivТaskAddingLline = styled.div`

position: absolute;
left: 35%;
top: 45%;
width: 240px;
z-index: 2;
`;


class NewTaskTrello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLineAddingTasks: false,
      taskbarToAdd: '',
    };
  }

  show = () => {
    this.props.NewTask(this.state.taskbarToAdd)
    this.setState({
      taskbarToAdd: "",
      showLineAddingTasks: false
    })
}

  showNewTask=()=>{

    (this.state.showLineAddingTasks) ?this.setState({
      showLineAddingTasks: false,
      taskbarToAdd: ""
    }):this.setState({
      showLineAddingTasks: true
    })
  }

  changeHandlerr = event => {
    this.setState({
      taskbarToAdd: event.target.value,
  });
  }

  render(){

    let ТaskAddingLline
    (!this.state.showLineAddingTasks) ? ТaskAddingLline="": ТaskAddingLline =  <div >
      <form className="col s12">
      <div className="row">
      <div className="input-field col s6">
      <Width440>
      <i className="material-icons prefix">mode_edit</i>
      <input placeholder="task"type="text" name="text" className="yellow-input"
      value={this.state.taskbarToAdd} onChange={this.changeHandlerr}/>
      <i className="small material-icons"onClick={this.show}>add</i>
      <i className="small material-icons" onClick={this.showNewTask}>close</i>
      </Width440>
      </div></div></form>
      </div>;
    return(
      <div>
      <Width440>
      <div className="collection">
      <a  className="collection-item"> <h5>Task</h5>
      <ShowNewTask onClick={this.showNewTask}><i className="tiny material-icons">border_color</i></ShowNewTask></a>
      </div>
      </Width440>
      <DivТaskAddingLline>
      {ТaskAddingLline}
      </DivТaskAddingLline>
      </div>
    )
  }
}



export default NewTaskTrello ;
