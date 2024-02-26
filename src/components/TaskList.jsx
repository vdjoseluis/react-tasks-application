import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
/* eslint-disable react/prop-types */

function TaskList() {
  // {props.tasks}

  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    // {props.tasks}
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aún
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
