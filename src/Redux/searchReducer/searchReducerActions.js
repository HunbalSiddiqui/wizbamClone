
export  var searchFunction = (searchItem,siteArr) => {
    return{
        type : "SEARCH",
        payload : {
            searchItem: searchItem,
            websites : siteArr
        }
    }
}