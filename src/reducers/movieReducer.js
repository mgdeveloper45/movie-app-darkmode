
const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

export default movieReducer
