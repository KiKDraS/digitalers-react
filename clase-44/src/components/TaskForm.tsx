import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { TasksContext } from "../contexts/TaskContext";
import { Task } from "../types/Task";

const initialState = {
  title: "",
  description: "",
};

export const TaskForm = () => {
  const { addTask } = useContext(TasksContext);
  const [task, setTask] = useState<Task>(initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target: { name, value } }: ChangeType) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generar ID para completar objeto Task
    // addTask({
    //   ...task,
    //   id: new Date().getTime(),
    // });

    addTask(task);

    //?. === Optional chaining
    inputRef.current?.focus();

    //Reiniciar
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add a Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          autoFocus
          ref={inputRef}
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

type ChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
