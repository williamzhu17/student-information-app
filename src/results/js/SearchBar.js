import React from "react";
import "../css/SearchBar.css";
import SearchResult from "./SearchResult.js";

function SearchBar(props) {

    // Determines whether to display the search results or not
    const [isSearching, setIsSearching] = React.useState(false);

    // Sets searchValue and turns isSearching on or off
    function handleSearchBarChange(e) {
        if (e.target.value !== "") {
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }
        setSearchValue(e.target.value);
    }

    const [searchValue, setSearchValue] = React.useState();

    return(
        <div>
            <input type="text" id="searchBar" placeholder="Search" onChange={handleSearchBarChange} />
            {isSearching ? <SearchResult data={props.data} searchValue={searchValue} />: null}
        </div>
    );
}

export default SearchBar;