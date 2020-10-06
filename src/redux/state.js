import { restart } from "../render";

const stat = {
  TasksToPerform: [{ taskTxt: "hnaravor inchvor mi ban", id: 0 }],
  currentTasksToBeCompleted: [
    { taskTxt: "inchvor mi ban", id: 0, name: "nare" },
  ],

  alreadyCompletedTasks: [{ taskTxt: "inchvor mi ban", id: 0 }],

  namesParticipants: [
    { name: "Shahen", id: 0 },
    { name: "Vano", id: 1 },
    { name: "Genadi", id: 2 },
    { name: "Ando", id: 3 },
  ],
  NewTask: (taskParameters) => functionNewTask(taskParameters),

  futureUser: (taskParameters, name) =>
    futureUserFunction(taskParameters, name),

  CompletedTask: (taskParameters) => functionCompletedTask(taskParameters),

  login: (logName) => login(logName),
};
const id = (t) => {
  if (t.length !== 0) {
    return t[t.length - 1].id + 1;
  } else {
    return 0;
  }
};

const login = (logName) => {
  stat.namesParticipants.push({
    name: logName,
    id: id(stat.namesParticipants),
  });
  return restart(stat);
};

const functionNewTask = (taskParameters) => {
  stat.TasksToPerform.push({
    taskTxt: taskParameters,
    id: id(stat.TasksToPerform),
  });
  return restart(stat);
};

const futureUserFunction = (taskParameters, name) => {
  stat.currentTasksToBeCompleted.push({
    taskTxt: taskParameters,
    id: id(stat.currentTasksToBeCompleted),
    name: name,
  });

  stat.TasksToPerform = stat.TasksToPerform.filter(
    (tt) => tt.taskTxt !== taskParameters
  );
  console.log(stat.TasksToPerform);

  return restart(stat);
};

const functionCompletedTask = (taskParameters) => {
  stat.alreadyCompletedTasks.push({
    taskTxt: taskParameters,
    id: id(stat.alreadyCompletedTasks),
  });

  stat.currentTasksToBeCompleted = stat.currentTasksToBeCompleted.filter(
    (tt) => tt.taskTxt !== taskParameters
  );
  return restart(stat);
};

export default stat;
