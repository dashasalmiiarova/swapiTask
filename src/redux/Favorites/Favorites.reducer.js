export const FavoritesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
            if (state.find(item => item.id === action.id)){
               return state
            }
            return [
                ...state,
                {
                    name: action.name,
                    id: action.id
                }
            ]
        case 'REMOVE_FAVORITE':
            return state.filter((item) => item.id !== action.id)
        default:
            return state;
    }
}