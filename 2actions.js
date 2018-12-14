let state = 0;

function updateState( state, action ) {
	if ( action.type === 'INCREMENT' ) return state + action.amount
	if ( action.type === 'DECREMENT' ) return state - action.amount
	return state
}

const incrementAction = { type: 'INCREMENT', amount: 10 }
const decrementAction = { type: 'DECREMENT', amount: 10 }

state = updateState(state, incrementAction )
console.log( state )

state = updateState(state, decrementAction)
console.log( state )

state = updateState(state, {})
console.log( state )

// actions - действия, происходящие в приложении , влияющие на состояние(state) 
// могут быть вызваны действия(actions) например пользователем 
// const(постоянная)