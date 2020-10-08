import flats from "../flats";

export function setFlats() {
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request Failed');
    }, netWorkError => console.log (networkError.message));
  return {
    type: 'SET_FLATS',
    payload: promise
  };
}

export function selectFlat(flat) {
    return {
      type: "SELECT_FLAT",
      payload: flat
    }
}