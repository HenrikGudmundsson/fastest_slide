import fs from 'fs';
import readline from 'readline';

export const getPyramidFromFile = async () => {
  const path = process.argv[2];

  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity
  });

  const pyramid = []

  for await (const line of rl) {
    pyramid.push(line.split(" ").map((item) => Number(item)));
  }

  pyramid.shift();

  return pyramid;
}
