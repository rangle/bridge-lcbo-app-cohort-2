import { combineEpics } from 'redux-observable';


//epics go here
const testEpic = action$ =>
  action$.ofType('')
  .mergeMap(action => action.payload)
  .map(response => console.log(response));

export default combineEpics(
  testEpic
)
