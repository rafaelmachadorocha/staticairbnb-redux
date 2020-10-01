import flats from "../flats";

export function setFlats(){
  //TODO: API CALL. But, for now, let's just simulate a DB
    return {
      type: "SET_FLATS",
      payload: flats
    }
}

export function selectFlat(flat) {
    return {
      type: "SELECT_FLAT",
      payload: flat
    }
}