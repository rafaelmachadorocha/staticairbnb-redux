export default function(state, action) {

  //compute and return the new state
  if(state === undefined) {
  //state in here refers to the part of the big redux state tree the reducer is responsible for
    return [];
  //that's the reducer initialization
  }
  switch (action.type) {
    case "SET_FLATS":
      return action.payload;
    default:
      return state;
  }
}