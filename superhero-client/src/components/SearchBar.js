import React from 'react'
 
class SearchBar extends React.Component{
    state = { searchText: 'Plantman' }
 
    // controlled component or 2-way-binding
    onInputChange = e => {
        e.preventDefault();
        this.setState({ searchText: e.target.value })
        this.props.changeStateOfDataFound()
    }
    
    onSearchSubmit = e => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.searchText)
    }

    // responsible to show the not found message
    message = () => {
        return (
            <div className="ui red mini message search__message">
                !!Data Not Found Try -
                    Superman, Thor , A-Bomb, Hulk,
                    Plantman, Captain America, James Bond, Rambo,
                    Black Panther ....
            </div>
        )
    }

    render() {
        return (
            <div className="search-bar ui segment search">
                <form onSubmit={this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <h2>Search Super Hero </h2>
                        <input
                            type="text"
                            value={this.state.searchText}
                            onChange = {this.onInputChange}
                        />
                    </div>
                </form>
                {!this.props.dataFound ? this.message() : ''}
            </div>
        )
    }
}

export default SearchBar