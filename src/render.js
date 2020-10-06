import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

// import {createStore} from 'redux';
// import {statt} from './redux/newStet';
// import {rootRedux} from './redux/rootReduser';
//
// const storing = createStore(rootRedux, 0 )
//
// storing.dispatch({type: 'samuray'})
//
// storing.subscribe(()=>{
//
//   console.log(storstoring.getState());
//})
export let restart = (stat) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        TasksToPerform={stat.TasksToPerform}
        currentTasksToBeCompleted={stat.currentTasksToBeCompleted}
        alreadyCompletedTasks={stat.alreadyCompletedTasks}
        NewTask={stat.NewTask}
        login={stat.login}
        namesParticipants={stat.namesParticipants}
        CompletedTask={stat.CompletedTask}
        futureUser={stat.futureUser}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
