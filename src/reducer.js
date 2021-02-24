export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // remove after finishing the work
    // token:'BQCmSn6veSL2HFOlSLy7nIDuUu0ULh-pfoRgNo_N3TuFAom0-kxXjFeKCaZ8pg2QestWwvB-fKZQN7fmZUnN_dxJBqlbp6FwwQ0kr7dJfPcml-LJfSWgdhCdaqF6P6ER2qs3qV0oYFqTV34peIlwjcpEpTIli2ClOlGVodWbb-0CbG0WWWgj'
};


const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playLists: action.playLists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;