import Home from "./home";
import { useLoaderData } from "react-router-dom";
import { getPropsFromObject } from "../libs/utils";
import PropTypes from "prop-types";

export default function Root() {
  const marvelsData = useLoaderData();
  const { loop, clear } = getPropsFromObject([
    "id",
    "name",
    "thumbnail",
    "description",
  ]);
  const characters = marvelsData.map((source) => {
    const character = loop(source);
    clear();
    return character;
  });

  return (
    <div className="p-5">
      <Home characters={characters} />
    </div>
  );
}
Home.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      description: PropTypes.string,
    })
  ),
};
