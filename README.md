# 리엑트네이티브 스터디

리엑트 네이티브를 통해 입력을 받고 이를 관리하는 것을 배울수 잇음

start : 2022.03.07

\*2022.03.07

- 사용자로부터 입력 받는 이벤트 제어

1.  브라우저의 onClick이벤트와 동일한 기능을 하기위하여 여러가지 component가 존재하지만,
    그중 TouchableOpacity의 onPress이벤트를 통해 동일한 기능을 만들수 잇음.

\*2022.03.08

- 사용자로부터 입력 데이터 받기

1. 문자입력 받기 브라우저의 onChange를 통한 데이터 입력과 동일하며, TextInput component를 활용함.
2. 여러가지의 props가 존재하며, 각각의 props는 react-native 공식홈페이지에서 찾아가면서 하는것이 좋아보임.

- 일정관리 어플리케이션 제작

1. react-native-calendars 라이브러리를 활용하여 전체 일정과 금일해야할 일을 나타낼수 있는 어플리케이션 제작
2. App.js에서 전체 스케줄 상태를 관리하고, 하위 component에서 render하는 방법으로 활용하려 함.
3. calender page에서도 각각의 todoItem 들의 완료상태를 변경해주기위하여 useState로 할경우 하위 컴포넌트에서 reRender를 불러올 수 잇음.
4. redux를 활용 해보기로 함.
