import React, { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'

const App = () => {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

  const handleTasks = () => {
    setTasks([...tasks, { id: `${tasks.length}`, title: task }])

    setTask('')
  }

  return (
    <>
      <StatusBar backgroundColor='#9E9E9E' barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.sectionTitle}>
          <TextInput
            placeholder='LEMBRAR'
            placeholderTextColor='#673AB7'
            style={styles.input}
            value={task}
            onChangeText={setTask}
            
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleTasks}
          >
            <Text style={styles.textButton}>SALVAR</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          {/* FAZER BOTÃO APAGAR TAREFA E SALVAR NA MEMORIA */}
          <FlatList
            style={styles.list}
            data={tasks}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.containerTask}>
                  <Text style={styles.textTask}>{item.title}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

// https://flatuicolors.com/palette/gb
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9E9E9E',
    flex: 1,
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
  input: {
    marginTop: 20,
    textAlign: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#673AB7',
    color: '#673AB7'
  },
  button: {
    marginTop: 20,
    borderColor: '#673AB7',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center'
  },
  list: {
    marginTop: 20
  },
  containerTask: {
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#9C27B0',
    borderRadius: 5,
  },
  textTask: {
    color: '#9C27B0',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textButton: {
    color: '#673AB7',
    textAlign: 'center',
  },
})

export default App
