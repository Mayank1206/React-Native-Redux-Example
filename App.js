import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { fetchPeopleFromAPI, updateText } from './src/actions/actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { people, isFetching } = props.peoples;
  const { textdemo } = props.demoText;

  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => props.updateText(text)}        
        value={textdemo}
      />
      <Text>{textdemo}</Text>
      <TouchableHighlight style={button} onPress={() => props.getPeople()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      { 
        people.map((person, i) => {
          return <View key={i} >
            <Text>Name: {person.name}</Text>
            <Text>Birth Year: {person.birth_year}</Text>
          </View>
        })        
      }      
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    peoples: state.peoplee,
    demoText: state.demoText
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI()),
    updateText: (text) => dispatch(updateText(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// this.props.actions.UPDATE_TEXT({text})