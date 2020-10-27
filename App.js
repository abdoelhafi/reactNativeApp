import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text,TextInput , View,Button } from 'react-native';
import myStyle from './style'
import Goal from './components/Goal'

export default function App() {
  const [goals,setGoals] = useState([]);
  const [newGoal,setNewGoal] = useState('');
// hello here
  
  return (
    <View style={styles.container}>
      <TextInput placeholder="Put your goal here ..." value={newGoal} onChangeText={text => setNewGoal(text)}  />
      <Button title="ADD" onPress={() =>{setGoals(prev => [...prev,newGoal]);setNewGoal("")} } />
      <View style={styles.space}/>

      {goals.map((goal,index) => <Goal key={index} style={styles.goalItem} text = {goal}/>)} 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create(myStyle);
