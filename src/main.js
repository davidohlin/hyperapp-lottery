import './styles/main.scss'

import { app, h } from 'hyperapp'

import state from './state'
import actions from './actions'
import view from './views'

app({
	state,
	actions,
	view
})
