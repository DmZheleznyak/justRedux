class Store {
	constructor(updateState, state) {
		this._state = state
		this._updateState = updateState
		this._callbacks = []
	}

	get state() {								// доступ к значению хранилища
		return this._state
	}

	update( action ) {				// обновление хранилища, только и всего
		this._state = this._updateState( this._state, action )
		this._callbacks.forEach( callback => callback() ) // уведомляем об изменении
	}

	subscribe( callback ) {
		this._callbacks.push( callback )
		return () => this._callbacks = this._callbacks.filter( cb => cb !== callback )
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

const unsubscribe = store.subscribe( () => console.log('1st change State', store.state) )
store.subscribe( () => console.log('2nd change State', store.state) )

store.update( incrementAction )
unsubscribe()
store.update( decrementAction )
store.update( {} )