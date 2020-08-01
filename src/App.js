import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
    return (
        <div className="App">
            <p>{props.userName}</p>
        </div>
    );
}

// Hoc : 컴포넌트를 입력으로 넣으면 기능을 추가한 신규 컴포넌트가 리턴
// curring
const mapStateToProps = (state) => ({
    // 왼쪽이 props, 오른쪽 store의 state
    userName: state.user
});

export default connect(mapStateToProps)(App);

// mapFunctionToDispatchActionToProps << 하기 함수 풀네임
const mapActionToProps = (dispatch) => ({
    // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) function
    bbb: (name) => dispatch(updateUser(name))
})
