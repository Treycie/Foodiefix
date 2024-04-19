import{RouterProvider, createBrowserRouter} from 'react-router-dom'
import Landingpage from './pages/Landingpage/index';
import Createmeals from './pages/Createmeals/index';
import Createmenu from './pages/Createmenu/index';




const router = createBrowserRouter([
  {path: "/", element: <Landingpage />},
  {path: "/createmenu", element: <Createmenu/>},
  {path: "/createmeals", element: <Createmeals />},

])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
