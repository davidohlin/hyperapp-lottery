import { h } from 'hyperapp'
import actuate from 'actuatejs'

const animate = ({ el, state }) => {
	if (state.currentItem !== '') {
		actuate('tada')(el)
			.catch($ => null)
	}
}

export default ({ state, actions }) =>
	<main class="hero container left">
	 	<div>
		 	<h2 class={state.currentItem === '' ? 'disabled mb2' : 'mb2'} onupdate={ el => animate({ el, state, actions }) }>
				{state.currentItem !== '' ? state.currentItem : 'Insert things...'}
			</h2>
			<button class="btn btn-primary" onclick={actions.random}>Lottery!</button>
		</div>
	</main>
