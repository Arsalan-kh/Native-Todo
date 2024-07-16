import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native'
import { useState } from 'react';
const GoalInput = (props) => {

  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);

  }

  function addGoalHandler() {

    //This two line add the input goal and clear the input box//
    const trimmedGoalText = enteredGoalText.trim();

   if(trimmedGoalText !==""){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('')
   }
   else{
    alert("Please Enter a Goal!")
   }
  }
  return (
    <Modal visible={props.visible} animationType='slide'>

      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />

        <TextInput onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Your course goal!'
          placeholderTextColor="#c4c3c3"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>


            <Button color="#5e0acc" onPress={addGoalHandler} title='Add Goal' />
          </View>
          <View style={styles.button}>

            <Button color="#f31282" onPress={props.onCancle} title='Cancel' />
          </View>

        </View>

      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: 20,
    backgroundColor: "#311b6b",

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    color: "#fff",
    padding: 8,

  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
})