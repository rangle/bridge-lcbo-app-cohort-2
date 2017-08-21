import React from "react"
import "./StoresList.css"

const StoresList = props => {
  let store
  const date = new Date()
  const weekday = new Array(7)
  weekday[0] = "sunday"
  weekday[1] = "monday"
  weekday[2] = "tuesday"
  weekday[3] = "wednesday"
  weekday[4] = "thursday"
  weekday[5] = "friday"
  weekday[6] = "saturday"
  const today = weekday[date.getDay()]

  function msmTo24time(msm) {
    const hour = msm / 60
    const mins = msm % 60

    return [hour, mins]
  }

  function msmTo12time(msm) {
    const time = msmTo24time(msm)
    const h24 = time[0]
    const h12 = 0 === h24 ? 12 : h24 > 12 ? h24 - 10 - 2 : h24
    const ampm = h24 >= 12 ? "PM" : "AM"
    const twoDigitMin = time[1] < 10 ? `:${time[1]}0` : `:${time[1]}`

    return [h12, twoDigitMin, ampm]
  }

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
