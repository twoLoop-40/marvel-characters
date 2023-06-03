import { useLoaderData } from "react-router-dom";
import { getPropsFromObject } from "../libs/utils";
import DetailImg from "./detailImg";
import DetailContents from "./detailContents";

export default function Detail() {
  const details = useLoaderData();
  const { loop } = getPropsFromObject([
    "name",
    "series",
    "stories",
    "comics",
    "thumbnail",
    "description"
  ]);
  const { name, series, stories, comics, thumbnail, description } = loop(
    details
  );
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <DetailImg thumbnail={thumbnail} />
        <DetailContents
          name={name}
          series={series}
          stories={stories}
          comics={comics}
          description={description}
        />
      </div>
    </div>
  );
}
