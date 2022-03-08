import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function Agendars ({item}) {
    return (
      <View style={styles.agendarCard}>
          <Text style={styles.agendarCardText}>{item.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    agendarCard:{
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:50,
        backgroundColor:"#fff",
        marginBottom:5
    },
    agendarCardText:{
        fontSize:16,
        fontWeight:"600"
    }
})

export default Agendars;    