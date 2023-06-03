export const collectCharacters =
  "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";

export const collectCharacter = (id) => {
  return `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
};
