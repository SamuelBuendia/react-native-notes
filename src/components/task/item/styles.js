import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listItemContainer: {
    paddingVertical: 20,
    backgroundColor: '#9A848F',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    marginVertical: 5
  },
  listItemContainerComplete: {
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    marginVertical: 5
  },
  listItem: {
    fontSize: 14,
    color: '#ffffff',
    paddingHorizontal: 10
  },
  listItemComplete: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 10,
    textDecorationLine: 'line-through'
  }
})
