import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.container.js"
import { saveState } from "./localStorage.js"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import { createEpicMiddleware } from "redux-observable"
import rootEpic from "./redux/epics"
import throttle from "lodash/throttle"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "./redux/reducers"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

const loggerMiddleware = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleware, epicMiddleware) //loggerMiddleware,
)

store.subscribe(
  throttle(() => {
    saveState({
      wishList: store.getState().product.wishList
    })
  }, 1000)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
