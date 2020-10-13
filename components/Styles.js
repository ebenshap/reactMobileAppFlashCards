import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
  button : {
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
    display:"flex",
    color: "white"
  },

  bigSpace : {
    marginTop: 40
  },

  smallSpace : {
    marginTop: 10
  },

  input : {
    borderColor: "#000011",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: 250
  },

  underLineText: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
  
})