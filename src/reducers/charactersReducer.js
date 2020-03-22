import characters_json from "../data/characters.json";
import { ADD_CHARACTER } from "../actions/constants";

export const characters = (state = { characters_json }, action) => {
  console.log(state);
  console.log("test", action.state);
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.characters_json.filter(
        item => item.id !== action.id
      );
      return characters;
    //   return action.payload.id;
    default:
      return state;
  }
};
