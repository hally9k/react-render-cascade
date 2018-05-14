import * as React from 'react'
import classnames from 'classnames'
import Letter from './letter'
import { traceLifecycle } from 'react-lifecycle-visualizer'

function getLetter() {
	return Letter
}

export default traceLifecycle(
	class Iterative extends React.Component {
		constructor(props, context) {
			super(props, context)
		}

		render() {
			const { data } = this.props
			const Component = getLetter()
			const child = ({ content }, index) => <Component key={index} letter={content} />

			return <div className="iterative">Iterative {data.map(child)}</div>
		}
	}
)
