import { combineEpics } from "redux-observable";
import { GET_API_RESULTS, sendAPIResults } from "../redux/actions";
import { sampleData } from './sampleData';
import {Observable} from 'rxjs';


const LCBO_API_KEY = 'MDo4OTc1NDY4Ni03MDAzLTExZTctOTNkNS04ZmJjMjZkMWQ2NTE6cHFlN3BwUEtzaDJ6aUpidHU4QnZTOU1RODVUSFZVd0RhRUc5'

export const fetchProducts = (searchString = '') => {
  // console.log(8, searchString, `http://lcboapi.com/products?access_key=${LCBO_API_KEY}&?q=${searchString||''}`)
  return fetch(`http://lcboapi.com/products?q=${searchString}&access_key=${LCBO_API_KEY}`)
    .then(res => res.json())
    .then(res => res.result)
    .catch(e => {
      console.log('request failed', e);
      return sampleData
    });
}


export const apiFetchEpic = (action$, blah, { ajax }) =>
  action$
    .ofType(GET_API_RESULTS)
    .mergeMap(action => ajax(`http://lcboapi.com/products?q=${action.payload}&access_key=${LCBO_API_KEY}`)) //TODO: use search string later.
    .map(({response}) => {
      // console.log(26, response);
      return sendAPIResults(response.result)});

export default (...args) => combineEpics(
  apiFetchEpic,
)(...args, {ajax: Observable.ajax})
