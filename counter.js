const initialState = {
    count: 0
   };
// [counter, setCounter] = useState(0)
// setCounter(6)

// {
//     type: 'DECREMENT',
//     payload: 2
// }

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            if (action.payload) {
                return{ 
                    count:state.count + action.payload
                }
            } else 
                return{
                count: state.count + 1
            }
        case 'DECREMENT':
            if (action.payload) {
                return{count:state.count - action.payload
                }
            } else {
                return {count:state.count - 1}
            }
        default: 
        return state
    }
}
