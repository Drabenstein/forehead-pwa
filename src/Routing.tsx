import {
  LoaderFunctionArgs,
  RouterProvider,
  createMemoryRouter,
  defer,
} from "react-router-dom";
import Categories from "./categories/Categories";
import Game from "./game/Game";
import questionApi from "./api/questionApi";
import { useDispatch } from "react-redux";
import { chooseNQuestions } from "./state/gameSlice";
import Summary from "./summary/Summary";
import ErrorPage from "./shared/ErrorPage";

const categoriesLoader = async () => {
  const categoriesPromise = questionApi.getAllCategories();

  return defer({
    categories: categoriesPromise,
  });
};

const Routing = () => {
  const dispatch = useDispatch();

  const gameLoader = async ({ params }: LoaderFunctionArgs) => {
    const allQuestions = await questionApi.getQuestionsForCategory(
      Number(params.categoryId)
    );
    dispatch(chooseNQuestions(allQuestions));
    return allQuestions;
  };

  const router = createMemoryRouter([
    {
      path: "/",
      element: <Categories />,
      loader: categoriesLoader,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game/:categoryId",
      element: <Game />,
      loader: gameLoader,
      errorElement: <ErrorPage />,
    },
    {
      path: "/summary",
      element: <Summary />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
