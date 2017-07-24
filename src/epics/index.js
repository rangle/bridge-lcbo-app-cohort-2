import { combineEpics } from "redux-observable";
import { GET_API_RESULTS, sendAPIResults } from "../redux/actions";

const LCBO_access_key =
  "MDowZmRjNmJhNi03MDAzLTExZTctOTU4Yi0yN2JjOTYxNzQwODY6NjRxMTJTTmZORmxUNUVEVTdwSXJRN2hjZmJsQXZSa3pES29P";


const fetchProducts = searchString =>
  fetch(`https://lcboapi.com/products?access_key=${LCBO_access_key}`, {
    method: "GET",
  }).then(res => res.json())
    .then(json => console.log(json.result))
    .catch(e => console.log(e));

const apiFetchEpic = action$ =>
  action$
    .ofType(GET_API_RESULTS)
    .mergeMap(action => fetchProducts()) //: use search string later.

export default combineEpics(apiFetchEpic);
