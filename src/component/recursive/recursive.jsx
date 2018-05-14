import * as React from 'react'
import Letter from 'component/letter'
import { traceLifecycle } from 'react-lifecycle-visualizer'

function getLetter() {
	return Letter
}

export default class Recursive extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { data, id } = this.props

		if (!data[id]) {
			return null
		}

		const Component = getLetter()
		return <Component data={data} id={id} />
	}
}
