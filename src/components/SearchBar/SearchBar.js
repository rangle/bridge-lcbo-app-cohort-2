import React from 'react'

const SearchBar = props => {
	return (
		<form onSubmit={event => {
						event.preventDefault()
						props.getResults(props.searchText)}
					}>
				<input
					className="search-input"
					placeholder="Search..."
					value={!props.searchText ? '' : props.searchText}
					onChange={event => {
						props.updateSearchText(event.target.value)}
					}
				/>
				<span>
					<button type="submit">Search</button>
				</span>
			</form>
		)
}

export default SearchBar
