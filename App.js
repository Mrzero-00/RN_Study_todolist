import { StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native';
import { useState,useEffect } from 'react';
import Calendars from './components/Calendars';

export default function App() {
  const [currentPage , setCurrentPage] = useState("work");
  const [inputText,setInputText] = useState(""); 
  const [todoAddState,setTodoAddState] = useState(false); 
  const [todoList,setTodoList] = useState(
    [{
      id:0,
      date:"2022-03-08",
      todos:[
        {
          id:0,
          title:"리액트네이티브 공부하기",
          state:false
        },
        {
          id:1,
          title:"리액트네이티브 스케줄러 완성",
          state:false
        },
        {
          id:2,
          title:"리액트네이티브 스케줄러 완성",
          state:false
        },
        {
          id:3,
          title:"리액트네이티브 스케줄러 완성",
          state:false
        },
        {
          id:4,
          title:"리액트네이티브 스케줄러 완성",
          state:false
        },
        {
          id:5,
          title:"리액트네이티브 스케줄러 완성",
          state:false
        },
        {
          id:6,
          title:"리액트네이티브 스케줄러 완성",
          state:false
        }
      ]
  },
  {
    id:1,
    date:"2022-03-13",
    todos:[
      {
        id:0,
        title:"결혼식 가기",
        state:false
      }
    ]
},
{
  id:2,
  date:"2022-03-10",
  todos:[
    {
      id:0,
      title:"sk 지원서 넣기",
      state:false
    },
  ]
},
    ]
  )
  const [todays,setTodays] = useState("");
  const onPressLogic = (e)=>{
    setCurrentPage(e);
  }
  const todoListAddLogic = ()=>{
    setTodoList({

    })
    alert(inputText);
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
    },
    calendarStyle:{
      flex:9
    }
  });
  console.log(todays);
  useEffect(()=>{
    const today = new Date();
    const fullYear = today.getFullYear();
    const month = today.getMonth()+1 <10 ? `0${today.getMonth()+1}`:today.getMonth()+1;
    const date = today.getDate()<10 ? `0${today.getDate()}`:today.getDate();
    setTodays(`${fullYear}-${month}-${date}`);
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>{onPressLogic("work")}}>
          <Text style={styles.btnText}>work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onPressLogic("calendar")}}>
          <Text style={styles.btnText}>calendar</Text>
        </TouchableOpacity>
      </View>
      {currentPage==="work"&&<View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitleText}>{currentPage}</Text>
        {todoAddState&&<TextInput 
          onSubmitEditing={todoListAddLogic}
          style={styles.inputText} 
          onChangeText={setInputText} 
          value={inputText}>
        </TextInput>}
      </View>}
      {currentPage==="work"&&<View style={styles.addBtnContainer}>
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
      </View>}
      {currentPage==="calendar"&&
      <View style={styles.calendarStyle}>
        <Calendars todoList={todoList}></Calendars>
      </View>
      }
    </View>
  );
}


