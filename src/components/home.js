import PropTypes from "prop-types";
import Card from "./card";

export default function Home({ characters }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {characters.map((character) => (
        <li key={character.id} className="relative">
          <Card
            id={character.id}
            name={character.name}
            thumbnail={character.thumbnail}
            description={character.description}
          />
        </li>
      ))}
    </ul>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string
  }),
  description: PropTypes.string
};
