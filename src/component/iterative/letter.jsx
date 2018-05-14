import * as React from 'react'

export default class Letter extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.letter !== this.props.letter
	}

	render() {
		const { letter } = this.props
		return <span>{letter}</span>
	}
}
