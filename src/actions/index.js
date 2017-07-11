import addItem from './item-add'
import removeItem from './item-remove'
import randomItem from './item-random'
import setAnimating from './set-animating'

export default {
	add: (state, actions, e) => ({
		input: '',
		items: addItem(state, e)
	}),
	remove: (state, actions, e) => ({
		items: removeItem(state, e)
	}),
	random: (state, actions) => ({
		currentItem: randomItem(state)
	}),
	debug: (state) => console.log('STATE:', state)
}
