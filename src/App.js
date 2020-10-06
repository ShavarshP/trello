import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Logi from "./pages/Login";
import Trello from "./pages/trello";
import { name } from "./pages/Login";
import * as serviceWorker from "./serviceWorker";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/login" render={() => <Logi login={props.login} />} />
        <Route
          path="/trello"
          render={() => (
            <Trello
              namesParticipants={props.namesParticipants}
              NewTask={props.NewTask}
              TasksToPerform={props.TasksToPerform}
              futureUser={props.futureUser}
              CompletedTask={props.CompletedTask}
              currentTasksToBeCompleted={props.currentTasksToBeCompleted}
              alreadyCompletedTasks={props.alreadyCompletedTasks}
            />
          )}
        />
        <Redirect from={`/`} to={`/login`} />
      </div>
    </BrowserRouter>
  );
};

export default App;
