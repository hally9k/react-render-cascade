import React from 'react'
// import { hot } from 'react-hot-loader'
import Recursive from './recursive'
import Iterative from './iterative'
import { Log, VisualizerProvider } from 'react-lifecycle-visualizer'

import './index.scss'

const data = [
	{
		id: 0,
		content: 'a',
		childIds: [1]
	},
	{
		id: 1,
		content: 'b',
		childIds: [2]
	},
	{
		id: 2,
		content: 'c',
		childIds: [3]
	},
	{
		id: 3,
		content: 'd',
		childIds: [4]
	},
	{
		id: 4,
		content: 'e',
		childIds: []
	}
]

export class Root extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			data
		}
	}

	changeContent = () => {
		data[Math.floor(Math.random() * 5)].content = String.fromCharCode(Math.floor(Math.random() * 26) + 97)

		this.setState({
			data
		})
	}

	render() {
		return (
			<VisualizerProvider>
				<div className="app">
					{/* <VisualizerProvider>
					<div>
						Recursive&nbsp;<Recursive data={data} id={0} />
						<Log />
					</div>
				</VisualizerProvider> */}

					<div>
						<Iterative data={data} />
						{/* <Log /> */}
					</div>
					<button onClick={this.changeContent}>Switch!</button>
				</div>
			</VisualizerProvider>
		)
	}
}

export default Root
