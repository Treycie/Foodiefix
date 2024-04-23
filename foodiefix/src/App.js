import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./pages/Landingpage/index";
import Createmeal from "./pages/Createmeal/index";
import Createmenu from "./pages/Createmenu/index";
import Allrecipes from "./pages/Allrecipes";
import UserRegistration from "./pages/UserRegistration";
import UserLogin from "./pages/UserLogin";
import Allmenus from "./pages/Allmenus";
import Allmeals from "./pages/Allmeals";
import Createrecipe from "./pages/Createrecipe";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/allmenus", element: <Allmenus /> },
  { path: "/allmeals", element: <Allmeals /> },
  { path: "/allrecipes", element: <Allrecipes /> },
  { path: "/createmenu", element: <Createmenu /> },
  { path: "/createmeal", element: <Createmeal /> },
  { path: "/createrecipe", element: <Createrecipe /> },
  { path: "/register", element: <UserRegistration /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/profile", element: <UserProfile /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
