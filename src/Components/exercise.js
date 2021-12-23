import { createStore } from "redux";

// 리덕스에서 관리 할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
};

// 액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 정의
const increase = () => {
    return {
        type: INCREASE
    };
};
const decrease = () => ({
    type: DECREASE
});
const changeText = text => ({
    type: CHANGE_TEXT,
    text
});
const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// 리듀서 만들기
const reducer = (state=initialState, action) => {
    switch (action.type){
        case INCREASE:
            return {
                ...state,
                counter : state.counter + 1
            }
        default : 
            return state;
    }
}