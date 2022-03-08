import { StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [currentPage , setCurrentPage] = useState("work");
  const [inputText,setInputText] = useState(""); 
  const [todoAddState,setTodoAddState] = useState(false); 
  const onPressLogic = (e)=>{
    setCurrentPage(e);
  }
  const onChangeLogic = ()=>{
    console.log(e);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:currentPage==="work"?"orange":'#000',
      paddingHorizontal:30
    },
    btnContainer:{
      flex:1,
      flexDirection:"row",
      marginTop:100,
      justifyContent:"space-between",
    },
    btnText:{
      fontSize:38,
      fontWeight:"600",
      color:"#fff"
    },
    pageTitleContainer:{
      flex:7
    },
    pageTitleText:{
      fontSize:28,
      fontWeight:"600",
      color:"#fff"
    },
    inputText:{
      marginTop:10,
      backgroundColor:"#fff",
      borderRadius:50,
      paddingHorizontal:10,
      paddingVertical:10,
      fontSize:16
    },
    addBtnContainer:{
      flex:2,
      alignItems:"center",
      justifyContent:"center"
    },
    addBtn:{
      paddingHorizontal:12,
      borderRadius:50,
      backgroundColor:"#fff",
      justifyContent:"center",
      alignItems:"center"
    },
    addBtnText:{
      fontSize:36,
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>{onPressLogic("work")}}>
          <Text style={styles.btnText}>work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onPressLogic("joy")}}>
          <Text style={styles.btnText}>joy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitleText}>{currentPage}</Text>
        {todoAddState&&<TextInput 
          style={styles.inputText} 
          onChangeText={setInputText} 
          value={inputText}>
        </TextInput>}
      </View>
      <View style={styles.addBtnContainer}>
        <TouchableOpacity 
          style={styles.addBtn}
          onPress={()=>{
            setInputText("");
            setTodoAddState(!todoAddState)
          }}>
          <Text style={styles.addBtnText}>
           {todoAddState?"x":"+"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


