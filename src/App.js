
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterProvider from "./routes/AppProvider";

function App() {
  return (
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
  );
}

export default App;
