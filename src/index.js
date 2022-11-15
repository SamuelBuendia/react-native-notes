import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, Modal } from 'react-native'
import { AddItem, TaskItem, TaskList, TaskModal } from './components'

export default function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {}, [taskList])

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

  return (
    <View style={styles.container}>
      <AddItem task={task} addItem={addItem} changeText={onHandleChange} />
      <TaskList taskList={taskList} renderItem={renderItem} />
      <TaskModal
        showModal={modalVisible}
        selectedTask={selectedTask}
        onHandleComplete={onHandleCompleteItem}
        onHandleCancel={onHandleCancel}
        onHandleDeleteItem={onHandleDeleteItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  }
})
