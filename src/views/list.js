import { h } from 'hyperapp'

import ListInput from './list-input'
import ListItem from './list-item'

export default ({ state, actions }) =>
	<div class="container left px2">
		<div class="list">
			<ListInput state={state} actions={actions} />
			<ul class="items">
				{ state.items.map(item => <ListItem item={item} actions={actions} />) }
			</ul>
		</div>
	</div>
