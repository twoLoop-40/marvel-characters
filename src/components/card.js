import { useNavigate } from "react-router-dom";

export default function Card({ id, name, thumbnail, description }) {
  const navigate = useNavigate();
  const onMoveClick = () => {
    navigate(`/character/${id}`);
  };
  return (
    <div>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button
          onClick={onMoveClick}
          type="button"
          className="absolute inset-0 focus:outline-none"
        >
          <span className="sr-only">View details for {name}</span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {name}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {description}
      </p>
    </div>
  );
}
