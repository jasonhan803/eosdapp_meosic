import App from '../App.js'
import { initScatter, busyStart, busyEnd } from '../store/actions.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		statefunction : state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBusyStart : () => {
			dispatch(busyStart())
		},
		onBusyEnd : () => {
			dispatch(busyEnd())
		},

		onInitScatter : (scatter, scatter_eos) => {
			dispatch(initScatter(scatter, scatter_eos))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
