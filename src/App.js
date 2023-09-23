import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { store } from "./store";
// import { Profile } from "./components/pages/profile/Profile";
import RouterProvider from "./routes/AppProvider";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterProvider />
        {/* <Profile /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
