import { ADD_CATEGORY, ADD_SUBCATEGORY } from "./types";

export const addCategory = (data) => ({
  type: ADD_CATEGORY,
  payload: data,
});
