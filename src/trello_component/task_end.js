import React, {Component} from 'react';
import styled from "styled-components";


const VerticalDistribution = styled.div`
  width: 440px;
`;

const TompletingTasks=(props)=>{

    let tompletingTasks = props.alreadyCompletedTasks.map((tt, k)=><div key={tt.id}><div className="row"><div className="col s12 m6">
    <div className="card blue-grey darken-1">
    <div className="card-content white-text">
    <span style={{color: "#c19a82"}} className="card-title">A task</span>
    <p>{tt.taskTxt} </p>
    </div>
    <div className="card-action">
    <div style={{cursor: "pointer"}} key={(tt.toString())+'t'} > <i className="small material-icons">check</i></div>
    </div></div></div></div></div>)

    return(
      <div>
      <VerticalDistribution>
      <div className="collection">
      <a  className="collection-item">.<h5>Еnd Тask</h5></a>
      </div>
      </VerticalDistribution>
      {tompletingTasks}
      </div>
    )

}


export default TompletingTasks ;
