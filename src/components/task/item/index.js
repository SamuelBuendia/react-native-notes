import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const TaskItem = ({ item, onHandleSelected }) => {
  return (
    <TouchableOpacity
      style={
        item.complete
          ? styles.listItemContainerComplete
          : styles.listItemContainer
      }
      onPress={() => onHandleSelected(item)}
    >
      <Text style={item.complete ? styles.listItemComplete : styles.listItem}>
        {item.value}
      </Text>
    </TouchableOpacity>
  )
}

export default TaskItem
