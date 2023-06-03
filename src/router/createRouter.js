import { createBrowserRouter } from "react-router-dom";
import Root from "../components/App";
import { collectCharacter, collectCharacters } from "../libs/api";
import Detail from "../components/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => {
      const response = await fetch(collectCharacters).then((res) => res.json());

      return response.status ? response.data.results : { error: "error" };
    }
  },
  {
    path: "/character/:id",
    element: <Detail />,
    loader: async ({ params }) => {
      const response = await fetch(collectCharacter(params.id)).then((res) =>
        res.json()
      );

      return response.status ? response.data.results[0] : { error: "error" };
    }
  }
]);

export default router;
