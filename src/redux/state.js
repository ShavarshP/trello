import {restart} from '../render'


const  stat={
  TasksToPerform:[
    {taskTxt:'hnaravor inchvor mi ban',  id:0}

  ],
  currentTasksToBeCompleted:[
    {taskTxt:'inchvor mi ban',  id:0, name:"nare"}
  ],

  alreadyCompletedTasks:[
    {taskTxt:'inchvor mi ban',  id:0, }
  ],

  namesParticipants:[
    {name:"Shahen",  id:0},
    {name:"Vano",  id:1},
    {name:"Genadi",  id:2},
    {name:"Ando",  id:3}

  ],
  NewTask:(taskParameters)=>functionNewTask(taskParameters),

  futureUser:(taskParameters, name)=>futureUserFunction(taskParameters, name),

  CompletedTask:(taskParameters)=>functionCompletedTask(taskParameters),

  login:(logName)=>login(logName)

};

const login =(logName)=>{
  stat.namesParticipants.push({name: logName,  id:stat.namesParticipants[stat.namesParticipants.length-1].id+1})
  return restart(stat);
}
const functionNewTask=(taskParameters)=>{
  console.log(stat.TasksToPerform.length==0);

  (stat.TasksToPerform.length!==0)? stat.TasksToPerform.push({taskTxt: taskParameters,  id:stat.TasksToPerform[stat.TasksToPerform.length-1].id+1
  }):stat.TasksToPerform.push({taskTxt: taskParameters, id:0})
  return restart(stat);
}
const futureUserFunction=(taskParameters, name)=>{

  (stat.currentTasksToBeCompleted.length!==0)? stat.currentTasksToBeCompleted.push({taskTxt: taskParameters,  id:stat.currentTasksToBeCompleted[stat.currentTasksToBeCompleted.length-1].id+1, name:name
  }):stat.currentTasksToBeCompleted.push({taskTxt: taskParameters, id:0, name:name})

  stat.TasksToPerform=stat.TasksToPerform.filter(tt => tt.taskTxt !== taskParameters )
  console.log(stat.TasksToPerform);

  return restart(stat);
}
const functionCompletedTask=(taskParameters)=>{

  (stat.alreadyCompletedTasks.length!==0)? stat.alreadyCompletedTasks.push({taskTxt: taskParameters,  id:stat.alreadyCompletedTasks[stat.alreadyCompletedTasks.length-1].id+1
  }):stat.alreadyCompletedTasks.push({taskTxt: taskParameters, id:0})

  stat.currentTasksToBeCompleted=stat.currentTasksToBeCompleted.filter(tt => tt.taskTxt !== taskParameters )
  return restart(stat);
}




export default stat ;
