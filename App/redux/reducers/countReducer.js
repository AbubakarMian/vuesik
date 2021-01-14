import { COUNTER_CHANGE, INCREASE_COUNTER, DECREASE_COUNTER } from '../constants';

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    console.log("in reducer", state)
    // return state;
    switch (action.type) {
        // case COUNTER_CHANGE:
        //     console.log("COUNTER_CHANGE")
        //     return {
        //         ...state,
        //         count: action.payload
        //     };

        case INCREASE_COUNTER:
            console.log("INCREASE_COUNTER", state)

            return {
                ...state,
                counter: state.counter + 1
            }
            break;
        case DECREASE_COUNTER:
            console.log("DECREASE_COUNTER", state)

            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        default:
            console.log("default", state)
            return state;
    }
}
export default reducer;
