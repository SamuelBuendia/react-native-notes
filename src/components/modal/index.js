import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import colors from '../../constants/colors'
import { styles } from './styles'

const TaskModal = ({
  showModal,
  selectedTask,
  onHandleComplete,
  onHandleCancel,
  onHandleDeleteItem
}) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Detail</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>
            This is your note
          </Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <Button
          title={
            selectedTask?.complete ? 'Mark as NOT Completed' : 'Mark as Complete'
          }
          color={'green'}
          onPress={onHandleComplete}
        />
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color={colors.red} onPress={onHandleCancel} />
          <Button title="Delete" color={colors.red} onPress={onHandleDeleteItem} />
        </View>
      </View>
    </Modal>
  )
}

export default TaskModal
