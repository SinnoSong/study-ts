function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}
log("page loaded");
log("User signed in", "1234");

// function log(message: string, userId = "Not signed in") {
//   let time = new Date().toLocaleTimeString();
//   console.log(time, message, userId);
// }

type Context = {
  appId?: string;
  userId?: string;
};

// function log(message: string, context: Context = {}) {
//   let time = new Date().toISOString();
//   console.log(time, message, context.userId);
// }
export {};
