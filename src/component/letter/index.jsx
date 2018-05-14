import * as React from 'react'
import Recursive from 'component/recursive'

export default class Letter extends React.Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { data, id } = this.props

		const child = (id, index) => <Recursive key={index} data={data} id={id} />

		return (
			<React.Fragment>
				<span>{data[id].content}</span>
				{data[id].childIds.length ? data[id].childIds.map(child) : null}
			</React.Fragment>
		)
	}
}
