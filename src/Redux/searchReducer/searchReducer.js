var initialState = {
    searchedItem : "",
    websites : []
}

var searchReducer = (state = initialState,action) => {
    switch (action.type) {
        case "SEARCH":
            return {
                ...state, searchedItem : action.payload.searchItem, websites : action.payload.websites  
            }            
        default:
            return state;
    }
}

export default searchReducer