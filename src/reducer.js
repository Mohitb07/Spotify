export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
    // just for debugging purposes 🤞
    token:'BQDaechxuCl03h9MVbzz_q-64qJrJMvJZgdlDuIIWnGodSuN9H7PCngcjDLvl2X9gsdWsN5lVFV3KNEYBvF5POV5vBvj9N8A2gVMx7s2JuI8jkyPUbcmwKK14k9j1L25Dl0cmBnGLmmqAOTlN3fFe55rQgGpHU_2YMR2sr3lMjWeLwwk'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, user:action.user
            };
        case 'SET_TOKEN':
            return {
                ...state, token:action.token,
            }
        default:
            return state;
    }
}

export default reducer;