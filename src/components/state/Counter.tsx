import { useReducer } from "react";


type CounterState = {
    counter: number
}

type CounterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'clear':
            return { count: state.count -= state.count }
        default:
            return state

    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Incremente 10

            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Incremente 10

            </button>
            <button onClick={() => dispatch({ type: 'clear', payload: 0 })}>
                Zerando
            </button>
            <hr />
            count : {state.count}



        </>
    )


}