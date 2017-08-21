import React from "react"
import "./StoresList.css"
import { msmTo24time, msmTo12time } from "../../helpers/time.helpers.js"

const StoresList = props => {
  let store
  const date = new Date()
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ]

  const today = weekday[date.getDay()]

  if (props.storeList) {
    store =
      props.storeList.length > 0
        ? props.storeList.map(store =>
            <li key={store.id}>
              <h2>
                {store.name}
              </h2>
              <p>
                {store.address_line_1} <br />
                {store.telephone} <br />
                Distance: {(store.distance_in_meters / 1000).toFixed(1)} km
                <br />
                Open: {msmTo12time(store[`${today}_open`])} -{" "}
                {msmTo12time(store[`${today}_close`])}
                <br />
              </p>
            </li>
          )
        : <h2>No results.</h2>
  } else {
    return null
  }

  return (
    <div className="store-list-wrapper">
      <h1>Stores</h1>
      <ul>
        {store}
      </ul>
    </div>
  )
}

export default StoresList
