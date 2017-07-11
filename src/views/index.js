import { h } from 'hyperapp'

import Header from './header'
import Hero from './hero'
import List from './list'

export default (state, actions) =>
	<div id="app">
		<Header />
		<Hero state={state} actions={actions} />
		<List state={state} actions={actions} />
	</div>
