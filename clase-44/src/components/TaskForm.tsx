const initialState = {
  title: "",
  description: "",
};

export const TaskForm = () => {
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add a Task</h1>

      <form>
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          autoFocus
        />
        <textarea
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"></textarea>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};
