import React, {Component} from 'react';
import styled from "styled-components";
import NewTaskTrello from "../trello_component/creating_new_task/trelloaj"
import TasksInProgress from "../trello_component/current_tasks"
import TaskNotFulfilled from "../trello_component/taskNotFulfilled"
import TompletingTasks from "../trello_component/task_end"



const HorizontalDistribution = styled.div`
  display: flex;
  background-color: #8eb1c1;
  width: 100hv;
  justify-content: space-evenly;
`;

const Trello =(props)=>{
  return( <div >
    <HorizontalDistribution>
    <div>
    <NewTaskTrello  NewTask={props.NewTask}/>

    <TaskNotFulfilled TasksToPerform={props.TasksToPerform} namesParticipants={props.namesParticipants} futureUser={props.futureUser} CompletedTask={props.CompletedTask}/>
    </div>
    <div>
    <TasksInProgress currentTasksToBeCompleted={props.currentTasksToBeCompleted} CompletedTask={props.CompletedTask}/>
    </div>
    <div>
    <TompletingTasks alreadyCompletedTasks={props.alreadyCompletedTasks}/>
    </div>
    </HorizontalDistribution>

    </div>
  );
}
export default Trello ;
