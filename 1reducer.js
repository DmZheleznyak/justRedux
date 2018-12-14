let state = 0;

function updateState( state, action ) {
	if ( action === 'INCREMENT' ) return state + 11
	else if ( action === 'DECREMENT' ) return state - 11
	else return state
}

state = updateState(state, 'INCREMENT')
console.log( state )


state = updateState(state, 'DECREMENT')
console.log( state )


state = updateState(state, 'NOTHING')
console.log( state )

// reducer - ф-я возвращает новое состояние 
// т.е. старое состояние(state) преобразовываем(reduce) в новое