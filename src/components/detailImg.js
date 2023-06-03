function DetailImg({ thumbnail }) {
  return (
    <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
      <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        <img
          className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default DetailImg;
