export const userReducer = (state = 'TOM', action) => {
    switch (action.type) {
        case "updateUser":
            return action.payload;
            break;

        default:
            break;
    }
    return state;
}