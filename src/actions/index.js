export const ADD_SCENICSPOTS = 'ADD_SCENICSPOTS';
export const add_scenicspots= item => ({
    type: ADD_SCENICSPOTS,
    payload: [
        ...item,
    ]
})

