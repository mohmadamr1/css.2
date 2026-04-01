import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MyAccount from "./pages/MyAccount";
import MyMoney from "./pages/MyMoney";
import Debts from "./pages/Debts";
import Trip from "./pages/Trip";
import People from "./pages/People";
import PersonDetails from "./pages/PersonDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Login },
      { path: "signup", Component: Signup },
      { path: "dashboard", Component: Dashboard },
      { path: "my-account", Component: MyAccount },
      { path: "my-money", Component: MyMoney },
      { path: "debts", Component: Debts },
      { path: "trip", Component: Trip },
      { path: "people", Component: People },
      { path: "people/:personId", Component: PersonDetails },
      { path: "*", Component: NotFound },
    ],
  },
]);