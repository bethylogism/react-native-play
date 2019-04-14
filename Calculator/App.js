import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      result: '',
      calculation: ''
    }
    this.operations = ['DEL', '+', '-', '*', '/']
  }

  calculateResult() {
    const text = this.state.result
    // parse the text
    this.setState({
      calculation: eval(text)
    })
  }

  // validate the input 
  validate() {
    const text = this.state.result 
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false 
    }
    return true
  }


  onBtnPress(text) {
    console.log(`You tapped ${text}`)
    if (text == '=') {
      return this.validate() && this.calculateResult(this.state.result)
    }
    this.setState({
      result: this.state.result + text,
      calculation: this.state.calculation + text
    })
  }

  operate(operation) {
    switch(operation) {
      case 'DEL': 
        let text = this.state.result.split('')
        text.pop()
        this.setState({
          result: text.join(''),
          calculation: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
      const lastChar = this.state.result.split('').pop()
        if(this.operations.indexOf(lastChar) > 0) return 
        if (this.state.text == '') return 
        this.setState({
          result: this.state.result + operation,
          calculation: this.state.result + operation
        })

    }
  }

  render() {

    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i <4; i++) {
      let row = []
      for (let j = 0; j <3; j++) {
        row.push(
          <TouchableOpacity 
            // pass the node's associated value to on press function 
            onPress={() => this.onBtnPress(nums[i][j])}
            style={styles.btn}
            key={nums[i][j]}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    
    let operators = []
    for (let i = 0; i < this.operations.length; i++) {
      operators.push(
        <TouchableOpacity
        key={this.operations[i]}
        onPress={() => this.operate(this.operations[i])}>
            <Text style={styles.operatorText}>{this.operations[i]}</Text>
        </TouchableOpacity>
        )
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculation}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {operators}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  btn: {
    flex: 1, 
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-around'
  },
  btnText: {
    fontSize: 45,
    color: 'black',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around'
  },
  operatorText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35
  }
});
