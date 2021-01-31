const initialState = {
    dataStock: [],
    isLoading: true
}

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_STOCK":
            console.log(payload, 'month reducer');
            return { ...state, dataStock: payload }
        case 'SET_LOADING':
            return { ...state, isLoading: payload }

        default:
            return state;
    }
}
// console.log(initialState);

export default Reducer