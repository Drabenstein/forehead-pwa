import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Game from "./game/Game";
import questionApi from "./api/questionApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      return await questionApi.getAllCategories();
    },
  },
  {
    path: "/game/:categoryId",
    element: <Game />,
    loader: async ({ params }) => {
      return await questionApi.getQuestionsForCategory(params.categoryId);
    },
  },
  { path: "/summary", element: <div /> },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
