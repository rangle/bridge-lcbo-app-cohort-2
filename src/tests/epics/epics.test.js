import { ActionsObservable } from "redux-observable";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import { apiFetchEpic } from "../../epics";
import { getAPIResults, SEND_API_RESULTS } from "../../redux/actions";

// this creates an action observable, allowing us to fake an action that our epic can hear
const action$ = ActionsObservable.of(getAPIResults("socks"));

describe("getRecipeByName Epic", () => {
  it("dispatches the correct action when it is successful", done => {
    const ajax = () =>
      Observable.of({
        response: {
          result: ["socks", "mocks"],
        },
      }); // this will be replacing our ajax call!

    apiFetchEpic(action$, null, { ajax }).subscribe(result => {
      expect(result.type).toBe(SEND_API_RESULTS);
      expect(result.payload).toEqual(["socks", "mocks"]);

      done();
    });
  });
});
