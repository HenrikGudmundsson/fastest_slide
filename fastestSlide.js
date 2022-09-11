import { getMinimumPath } from "./getMinimumPath.js";
import { getPyramidFromFile } from "./getPyramidFromFile.js";

export const fastestSlide = async () => {
  const pyramid = await getPyramidFromFile();
  return getMinimumPath(pyramid);
}