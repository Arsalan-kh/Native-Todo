import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {  useSelector } from 'react-redux';
import { getTheme } from './core/theme';
import ThemeSelection from './components/ThemeSelection';  
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const theme = useSelector((state) => getTheme(state));
  const [modalIsVisible, setModalIsVisible] = useState(false); //State for open&close the modal//
  const [courseGoals, setCourseGoals] = useState([]) //State for course goal by default it's empty state//


  //Function of open a  modal screen//
  const startAddGoalAddHandler = () => {
    setModalIsVisible(true)
  }
  //end of modal screen function//

  //Function to close a modal screen ///

  const endAddGoalAddHandler = () => {
    setModalIsVisible(false);

  }

//Add course goal handler//
  const addGoalHandler = (enteredGoalText) => {

    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString(),length: courseGoals.length+1 },
    ]);

    endAddGoalAddHandler()
  }



//Delete course goal handler//
  const deleteGoalHandler = (id) => {
    // console.log("Delete")
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.id !== id);

    });
    
  };



  return (
    //we can not use div and other html elements//

    //we style element using inline style or stylesheet object as a props//
    <>
<StatusBar style='light'/>
    <View style={[styles.appContainer, { backgroundColor: theme.backgroundColor }]}>
    <ThemeSelection />
      <Button onPress={startAddGoalAddHandler} title='Add New Goal' color="#5e0acc" />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onCancle={endAddGoalAddHandler} onAddGoal={addGoalHandler} />}
      <View style={styles.goalContainer}>
        {courseGoals.length === 0 ? (<Text  style={{ fontWeight: "bold",color:"#fff" }}>There are no goals 🚀</Text>) :

          (
            <FlatList data={courseGoals}
              renderItem={(itemData) => {
                return <GoalItem id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                  text={itemData.item.text}
                  length={itemData.item.length}
                  />;
              }}
              keyExtractor={(item, index) => {
                return item.id
              }}
            />
          )}


      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor:"#1e085a"
  },

  goalContainer: {
    flex: 5,
    marginTop: 20,
  },

});
