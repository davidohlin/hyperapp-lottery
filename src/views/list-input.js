import { h, app } from 'hyperapp'

export default ({ state, actions }) =>
	<input class="list-input" type="text" placeholder="Insert text, add with Enter" onkeyup={e => e.keyCode === 13 && e.target.value !== '' ? actions.add(e) : null} value={state.input} oncreate={element => setTimeout(() => element.focus(), 100)}  />
