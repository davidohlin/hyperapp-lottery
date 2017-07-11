import uuid from 'uuid'

export default (state, e) => state.items.concat({
	id: uuid(),
	value: e.target.value
})
