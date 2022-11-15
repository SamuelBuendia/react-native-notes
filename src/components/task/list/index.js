import React from 'react'
import { FlatList, Text, View, ListItem } from 'react-native'
import { styles } from './styles'

const TaskList = ({ taskList, renderItem }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Todo List</Text>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default TaskList
