import { store } from "./app/store";
import Cart from "./components/Cart";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
export default App;
