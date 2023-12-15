import model from "./model.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId).populate("currencies");
export const findUserByUsername = (username) =>
  model.findOne({ username: username }).populate("currencies");;
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password }).populate("currencies");;
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
