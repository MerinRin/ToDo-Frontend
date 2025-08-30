import { commonAPI } from "./commonAPI";

const serverURL = "http://localhost:4000";

// Add todo
export const addtodoAPI = (reqBody) => {
  return commonAPI("POST", `${serverURL}/todos`, reqBody);
};

// Get all todos
export const getAlltodoAPI = () => {
  return commonAPI("GET", `${serverURL}/todos`);
};

// Delete todo
export const deletetodoAPI = (id) => {
  return commonAPI("DELETE", `${serverURL}/todos/${id}`);
};

// Get single todo for edit
export const getEdittodoAPI = (id) => {
  return commonAPI("GET", `${serverURL}/todos/${id}`);
};

// Update todo
export const updatetodoAPI = (id, reqBody) => {
  return commonAPI("PUT", `${serverURL}/todos/${id}`, reqBody);
};
