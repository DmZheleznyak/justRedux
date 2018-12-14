class Store {
	constructor(updateState, state) {
		this._state = state
		this._updateState = updateState
	}

	get state() {		// доступ к значению хранилища
		return this._state
	}

	update( action ) {		// обновление хранилища, только и всего
		this._state = this._updateState( this._state, action )
	}
}

const store = new Store(updateState, 0)

function updateState( state, action ) {
	if ( action.type === 'INCREMENT' ) return state + action.amount
	if ( action.type === 'DECREMENT' ) return state - action.amount
	return state
}

const incrementAction = { type: 'INCREMENT', amount: 10 }
const decrementAction = { type: 'DECREMENT', amount: 10 }

store.update( incrementAction )
console.log( store.state )

store.update( decrementAction )
console.log( store.state )

store.update( {} )
console.log( store.state )