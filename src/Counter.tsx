import * as React  from 'react';

interface ICounterProps {
	increment: number;
	color: string;
}

interface ICounterState {
	count: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
	private interval: number;
	
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState({
			count: this.state.count + this.props.increment
		})
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<h1 style={{ color: this.props.color }}>
					Increment: {this.props.increment} Counter: {this.state.count}
				</h1>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
}
