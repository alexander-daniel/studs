export const REGISTER_SEARCH_RESULTS = 'REGISTER_SEARCH_RESULTS';

export function search(searchTerm) {
  return (dispatch) => {
    return fetch(`/api/search/${searchTerm}`).then(res => res.json()).then(json => {
      dispatch({
        type: REGISTER_SEARCH_RESULTS,
        result: json
      });
    });
  };
}
