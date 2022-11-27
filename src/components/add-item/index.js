import React from 'react'
import { Button, TextInput, View } from 'react-native'
import colors from '../../constants/colors'
import { styles } from './styles'

const AddItem = ({task, addItem, changeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Enter Task"
        onChangeText={changeText}
      />
      <Button disabled={!task} title="Add" color={colors.black} onPress={addItem} />
    </View>
  )
}

export default AddItem