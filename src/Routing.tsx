import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Categories from "./categories/Categories";
import Game from "./game/Game";
import questionApi from "./api/questionApi";
import { useDispatch } from "react-redux";
import { chooseNQuestions } from "./state/gameSlice";
import Summary from "./summary/Summary";

const Routing = () => {
  const dispatch = useDispatch();

  const router = createMemoryRouter([
    {
      path: "/",
      element: <Categories />,
      loader: async () => {
        return await questionApi.getAllCategories();
      },
      errorElement: <div>Holy Guacamole, coś nie pykło</div>,
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
      errorElement: <div>Holy Guacamole, coś nie pykło</div>,
    },
    {
      path: "/summary",
      element: <Summary />,
      errorElement: <div>Holy Guacamole, coś nie pykło</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
