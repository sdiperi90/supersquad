import { ADD_CHARACTER } from "./constants";

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  };

  return action;
}
