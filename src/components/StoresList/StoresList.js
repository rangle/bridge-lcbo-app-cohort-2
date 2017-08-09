import React from "react"
import "./StoresList.css"

const StoresList = props => {
  let store

  if (props.storeList) {
    store =
      props.storeList.length > 0
        ? props.storeList.map(store =>
            <li key={store.id}>
              <h2>
                {store.address_line_1}
              </h2>
              <p>
                Distance: {store.distance_in_meters / 1000} km
              </p>
            </li>
          )
        : <h2>No results.</h2>
  } else {
    return null
  }

  return (
    <ul>
      {store}
    </ul>
  )
}

export default StoresList
