import { useNavigate } from "react-router-dom";

function DetailContents({ name, series, stories, comics, description }) {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate(`/`);
  };
  return (
    <div className="px-6 lg:contents">
      <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
        <div
          onClick={moveToHome}
          className="mb-5 cursor-pointer font-bold text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </div>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {name}
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">{description}</p>
        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
          <ul className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <ul>
                <strong className="text-lg font-semibold text-gray-900">
                  comics:
                </strong>
                {comics.items.map((comic, index) => (
                  <li key={index}>{comic.name}</li>
                ))}
              </ul>
            </li>
            <li className="flex gap-x-3">
              <ul>
                <strong className="text-lg font-semibold text-gray-900">
                  series:
                </strong>
                {series.items.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailContents;
