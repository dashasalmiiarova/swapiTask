export const addFavorite = ( name, id ) => ({
    type: 'ADD_FAVORITE',
    name,
    id
});

export const removeFavorite = (id) => ({
    type: 'REMOVE_FAVORITE',
    id
});