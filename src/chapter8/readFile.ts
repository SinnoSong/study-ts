import * as fs from "fs";

fs.readFile("/home/sinno/.aws/config", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});
