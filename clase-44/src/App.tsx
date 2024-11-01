import { useContext } from "react";
import logo from "./assets/react.svg";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TasksContext } from "./contexts/TaskContext";

export const App = ({ title = "Default title" }: Props): JSX.Element => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <img
              src={logo}
              alt="React Logo"
              style={{ width: "2.5rem" }}
              className="mw-25"
            />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h6 className="text-light d-flex justify-content-end">
                Total Tasks{" "}
                <span className="badge bg-primary ms-2">{tasks.length}</span>
              </h6>

              <TaskList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface Props {
  title?: string;
}
