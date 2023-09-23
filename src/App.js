import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; 
import "./App.css";
import { store } from "./store";
import RouterProvider from "./routes/AppProvider";
import Main from "./components/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Main/>
        <RouterProvider />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
