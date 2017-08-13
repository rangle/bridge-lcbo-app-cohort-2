import React from "react"
import "./SearchBar.css"

const SearchBar = props => {
  return (
    <form
      className="searchbar"
      onSubmit={event => {
        event.preventDefault()
        props.getResults(props.searchString, 0)
      }}
    >
      <input
        className="text-input"
        placeholder="Start typing to search..."
        value={!props.searchString ? "" : props.searchString}
        onChange={event => {
          props.updateSearchText(event.target.value)
          props.getResults(event.target.value, 500)
        }}
      />
    </form>
  )
}

export default SearchBar
