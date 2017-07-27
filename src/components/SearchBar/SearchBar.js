import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
	return (
		<form
				className="searchbar"
				onSubmit={event => {
						event.preventDefault()
						props.getResults(props.searchString)}
				}>
				<input
					className="text-input"
					placeholder="Search..."
					value={!props.searchString ? '' : props.searchString}
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
