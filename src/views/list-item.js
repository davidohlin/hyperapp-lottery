import { h } from 'hyperapp'

export default ({ item, actions, e }) =>
	<li class="list-item btn" data-id={item.id} onclick={e => actions.remove(e)}>
		{item.value}
		<svg class="list-item__icon" viewBox="0 0 8 8">
			<path d="M 0 1L 1 0L 4 3L 7 0L 8 1L 5 4L 8 7L 7 8L 4 5L 1 8L 0 7L 3 4L 0 1Z"/>
		</svg>
	</li>