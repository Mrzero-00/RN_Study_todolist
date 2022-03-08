import {Calendar, CalendarList,LocaleConfig,Arrow} from 'react-native-calendars';
import {View,Text,ScrollView} from 'react-native';
import Agendars from './Agendars';
import { useEffect,useState,useRef } from 'react';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const workout = {key: 'workout', color: 'green'};


function Calendars ({todoList}) {
    const [markList,setMarkList] = useState({});
    const [todoListArray,setTodoListArray] = useState([]);
    const [selectDate,setSelectDate] = useState("");

    function mergeObj(obj1) {
        const newObj = {};

        //obj1은 배열이야 즉 [{},{}] 이러한 형태인데..
        //내가 필요한 건 {{},{}} 이 안에 데이터만 필요하다 이거지..

        for (let att in obj1) { 
           const obj = obj1[att];
           for (let att1 in obj) { 
            newObj[att1] = obj[att1]; 
         }
        }
        setMarkList(newObj);
      }

    useEffect(()=>{
        let markArray = [];
        for(let i = 0 ; i < todoList.length ; i++){
            const key = todoList[i].date;
            const item ={[key]:{dots:[workout], disabled: false,value:todoList[i].todos}};
            markArray.push(item);
        }
        mergeObj(markArray);
    },[])
    //console.log(typeof(markList[selectDate]?.value));
    return (
        <View style={{flex:1}}>
            <Calendar
            onDayPress={(day) => {setSelectDate(day.dateString)}}
            monthFormat={'yyyy MM'}
            onMonthChange={(month) => {console.log('month changed', month)}}
            firstDay={0}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            /** Replace default month and year title with custom one. the function receive a date as parameter. */
            //renderHeader={(date) => {/*Return JSX*/}}
            scr
            markingType="multi-dot"
            markedDates={markList}
            />
            <View style={{flex:1}}>
                <Text style={{color:"#fff"}}>todo List</Text>
                    <Text style={{color:"#fff"}}>{selectDate}</Text>
                <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {markList[selectDate]?.value.map((item)=>(<Agendars item={item} key={item.id}></Agendars>))}
                        {markList[selectDate]?.value ===undefined&&<Text style={{color:"#fff",flex:1}}>없음</Text>}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default Calendars;    