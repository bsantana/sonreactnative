import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class Counter extends Component {
	static navigationOptions = {
		title: 'Counter App'
	}

	constructor( props ) {
		super( props )

		this.state = {
			count: 0
		}

		this.descEvent = this.descEvent.bind(this)
		this.incEvent = this.incEvent.bind(this)
	}

	descEvent() {
		let { count } = this.state

		if (count == 0)
			return false

		this.setState({
			count: this.state.count - 1
		})
	}

	incEvent() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		let { count } = this.state
		return(
			<View>
				<Button title="Desc" onPress={ () => this.descEvent() }></Button>
				<Text>{ count }</Text>
				<Button title="Inc" onPress={ () => this.incEvent() }></Button>
			</View>
		)
	}
}

export default Counter