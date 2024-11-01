import { useContext } from "react";
import { Task } from "../types/Task";
import { TasksContext } from "../contexts/TaskContext";

export const TaskCard = ({ task: { title, id, description } }: Props) => {
  const { deleteTask } = useContext(TasksContext);

  return (
    <div className="card card-body bg-secondary rounded-0">
      <h3>{title}</h3>
      <p>{id}</p>
      <p>{description}</p>
      <button
        className="btn btn-danger btn-block"
        // onClick={() => id && deleteTask(id)}
        onClick={() => deleteTask(id)}
      >
        Delete
      </button>
    </div>
  );
};
// interface Props {
//   id: number;
//   title: string;
//   description: string;
// }

interface Props {
  task: Task;
}
