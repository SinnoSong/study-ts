// function getUser() {
//   getUserID(18)
//     .then((user) => getLocation(user))
//     .then((location) => console.info(" got location", location))
//     .catch((error) => console.error(error))
//     .finally(() => console.info("done getting location "));
// }

// use async written
// async function getUser() {
//   try {
//     const user = await getUserID(18);
//     const location = await getLocation(user);
//     console.info("got location", location);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.info("done getting location ");
//   }
// }
