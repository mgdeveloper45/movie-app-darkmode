const themeReducer = (state = false, action) => {
    switch (action.type) {
        case 'THEME_PICKER':
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;