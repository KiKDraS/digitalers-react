import { Provider } from "react-redux";
import { Counter } from "./features/counter/Counter";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
