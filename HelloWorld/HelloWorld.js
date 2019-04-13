import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HelloImage from './HelloImage'

const styles = StyleSheet.create({
    mediumGreen: {
        color: 'green',
        fontSize: 15,
    }
})

export default class HelloWorld extends React.Component {

    constructor(props) {
        super(props)
        this.state = {isShowingName: false}
        this.onPress = this.onPress.bind(this)
    }

    onPress() {
        this.setState({isShowingName: !this.state.isShowingName})
    }
        

    render() {
        return (

            <View>
                <HelloImage />
                <Text style={styles.mediumGreen}>I'm the Real Hello World component....</Text>
                {this.state.isShowingName===true ? <Text style={this.props.style}>Hello {this.props.name}</Text>: null}
                <Button
                    onPress={this.onPress}
                    title="Click Me!"
                    color = "#841584"
                    accessibilityLabel = "Learn more about this purple button"
                />
            </View>

        )
    }
}

