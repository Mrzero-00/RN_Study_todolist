import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [currentPage , setCurrentPage] = useState("work");
  const onPressLogic = (e)=>{
    setCurrentPage(e);
  }
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    flex:9
  },
  pageTitleText:{
    fontSize:28,
    fontWeight:"600",
    color:"#fff"
  }
});
