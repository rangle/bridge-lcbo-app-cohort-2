import { combineEpics } from "redux-observable";
// import $ from "jquery";

import { GET_API_RESULTS, sendAPIResults } from "../redux/actions";
const LCBO_access_key =
  "Token MDoyODdhM2Q2OC02ZGI2LTExZTctOGUxNy0yZjI2ZmZkNWQwYTQ6Q3hxODRJdVpTdlA5cEUzTmgwRmhUWWpJalRnWXpOOEFQbEZ";

const myHeaders = new Headers();
// myHeaders.append("Access-Control-Allow-Origin", '*')
// myHeaders.append("Authorization", LCBO_access_key);

// myHeaders.Access-Control-Allow-Origin='*'

export const fetchProducts = searchString =>
  // fetch(`http://pokeapi.co/api/v2/pokemon/${6}`)

  fetch(`http://lcboapi.com/products`
    , {
    method: "GET",
    // headers: {
    // //   Authorization: LCBO_access_key
    // //
    // },

 mode: 'no-cors',
  })
    //   $.ajax({
    //   url: 'http://lcboapi.com/products/346197',
    //   headers: {
    //     Authorization: 'Token YOUR_ACCESS_KEY'
    //   }
    // })
    .then(res => res.json())
    .then(res => console.log(8, "epics", res))
    .catch(e => console.log(e));

//epics go here
const apiFetchEpic = action$ =>
  action$
    .ofType(GET_API_RESULTS)
    .mergeMap(action => fetchProducts()) //TODO: use search string later.
    .map(response => sendAPIResults(response));

export default combineEpics(apiFetchEpic);
