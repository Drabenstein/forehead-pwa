import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Game from "./game/Game";
import questionApi from "./api/questionApi";
import { useDispatch } from "react-redux";
import { chooseNQuestions } from "./state/gameSlice";
import Summary from "./summary/Summary";

const Routing = () => {
  const dispatch = useDispatch();

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
        const allQuestions = await questionApi.getQuestionsForCategory(
          params.categoryId
        );
        dispatch(chooseNQuestions(allQuestions));
        return allQuestions;
      },
    },
    { path: "/summary", element: <Summary /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
