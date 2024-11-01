import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TasksContext } from "../contexts/TaskContext";
import { BiTaskX } from "react-icons/bi";

export const TaskList = (): JSX.Element => {
  const { tasks } = useContext(TasksContext);

  if (tasks.length === 0) {
    return (
      <div className="text-light text-center">
        <BiTaskX size="20rem" />
      </div>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="col-md-4 mt-2">
          {/* <TaskCard {...task} /> */}
          {/* <TaskCard id={task.id} description={task.description} title={task.title} /> */}
          <TaskCard task={task} />
        </div>
      ))}
    </>
  );
};
