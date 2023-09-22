import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Todos } from "./pages";
import "./styles/App.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
