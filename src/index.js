import { useFonts } from 'expo-font'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from 'react-native'
import { AddItem, TaskItem, TaskList, TaskModal } from './components'

export default function App() {
  const [loaded] = useFonts({
    LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf')
  })

  const [task, setTask] = useState('')
  const [showNotes, setShowNotes] = useState(true)
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const orderTask = () => {
    setTaskList(
      taskList.sort((x, y) => Number(x.complete) - Number(y.complete))
    )
  }

  const addItem = () => {
    setTaskList((prev) => [
      { id: Math.random().toString(), value: task, complete: false },
      ...prev
    ])
    setTask('')
  }

  const onHandleSelected = (item) => {
    setSelectedTask(item)
    setModalVisible(true)
  }

  const onHandleCancel = () => {
    setModalVisible(false)
  }

  const onHandleDeleteItem = () => {
    const newTaskList = (prevTaskList) =>
      prevTaskList.filter((item) => item.id !== selectedTask.id)
    setTimeout(() => setTaskList(newTaskList), 500)
    orderTask()
    setModalVisible(false)
  }

  const onHandleCompleteItem = () => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === selectedTask.id) item.complete = !item.complete
        return item
      })
    )
    orderTask()
    setModalVisible(false)
  }

  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )

  const onHandleChange = (text) => setTask(text)

  const onHandleComplete = () => {
    setShowNotes(!showNotes)
  }

  let content = (
    <View style={styles.centerItems}>
      <Text>Hola! Esta es Otra Vista</Text>
    </View>
  )

  if (showNotes) {
    content = (
      <>
        <AddItem task={task} addItem={addItem} changeText={onHandleChange} />
        <TaskList taskList={taskList} renderItem={renderItem} />
        <TaskModal
          showModal={modalVisible}
          selectedTask={selectedTask}
          onHandleComplete={onHandleCompleteItem}
          onHandleCancel={onHandleCancel}
          onHandleDeleteItem={onHandleDeleteItem}
        />
      </>
    )
  }

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {content}
      <View style={styles.btnChangeView}>
        <Button
          title="Change View"
          color={'green'}
          onPress={onHandleComplete}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerItems: {
    alignItems: 'center',
    justifyContent: "center",
  },
  btnChangeView: {
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    marginTop: 8
  }
})
