import flats from "../flats";

export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';
export const HIDE_SPINNER = 'HIDE_SPINNER';

// the link between th front and the back-end is done in the actions

export function setFlats() {
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request Failed');
    }, netWorkError => console.log (networkError.message));
  return {
    type: SET_FLATS,
    payload: promise
  };
}

export function selectFlat(flat) {
    return {
      type: SELECT_FLAT,
      payload: flat
    }
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
    payload: true
  }
}