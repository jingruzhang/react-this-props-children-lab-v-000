import React, {Component} from 'react';

export default class ThemedDecorations extends Component {
	render() {
		const updatedChildren = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {className: this.props.theme})
		})
		
		return (
			<div>
				{updatedChildren}
			</div>
		)
	}
}
