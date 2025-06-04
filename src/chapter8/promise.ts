import { readFile } from "fs";

// function appendAndReadPromise(path: string, data: string): Promise<string> {
//   return appendPromise(path, data)
//     .then(() => readFilePromise(path))
//     .catch((err) => {
//       console.error("Error in appendAndReadPromise:", err);
//       throw err; // Re-throw the error to propagate it
//     });
// }

function readFilePromise(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
