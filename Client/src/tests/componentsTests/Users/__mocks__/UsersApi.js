import { users } from "../UsersFixture";

export const getUsers = async (count = 10) => {
  if (typeof count !== "number" && count < 0) return [];
  return users;
};

export const getUsersByName = async name => {
  if (typeof name !== "string") return [];
  return users;
};
