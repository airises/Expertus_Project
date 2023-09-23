import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute
        component={<SignInPage />}
        roles={[USER_ROLE.GUEST]}
        fallBacPath="/mainPage"
      />
    ),
  },

  {
    path: "/signup",
    element: (
      <PrivateRoute
        component={<SignUpPage />}
        roles={[USER_ROLE.GUEST]}
        fallBacPath="/mainPage"
      />
    ),
  },
]);
