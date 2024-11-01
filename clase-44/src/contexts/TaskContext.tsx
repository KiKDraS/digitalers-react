import { createContext, useCallback, useMemo, useState } from "react";
import { Task } from "../types/Task";

const initialValue = {
  tasks: [],
  deleteTask: () => {},
  addTask: () => {},
};

const TasksContext = createContext<ProviderProps>(initialValue);

const TasksProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        id: new Date().getTime(),
      },
    ]);
  };

  //   const deleteTask = useCallback(
  //     (id: number) => {
  //       setTasks(tasks.filter((task) => task.id !== id));
  //     },
  //     [tasks]
  //   );

  const deleteTask = useCallback(
    (id: number | undefined) => {
      if (!id) return;
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );

  const data = useMemo(
    () => ({
      tasks,
      deleteTask,
      addTask,
    }),
    [deleteTask, tasks]
  );

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

interface Props {
  children: React.ReactNode;
}

type ProviderProps = {
  tasks: Task[];
  deleteTask: (id?: number) => void;
  addTask: (task: Task) => void;
};

export { TasksContext, TasksProvider };
