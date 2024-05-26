type ExistingUser = {
  id: number;
  name: string;
};
type NewUser = {
  name: string;
};

function deleteUser(user: { id?: number; name: string }) {
  delete user.id;
}
let existingUser: ExistingUser = {
  id: 123456,
  name: "Ima User",
};

deleteUser(existingUser);

type LegacyUser = {
  id?: number | string;
  name: string;
};
let legacyUser: LegacyUser = {
  id: "123213",
  name: "Ima User",
};
// deleteUser(legacyUser);

export {};
