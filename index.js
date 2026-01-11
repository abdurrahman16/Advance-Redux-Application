const redux= require('redux');

//init ial state
const initialState ={
    num:0
}

//reducer
const rootReducer=(state= initialState,action) => {
    if (action.type==='INCREMENT'){
        return {
            ...state,
            num: state.num +1
        }
    }
    if (action.type==='ADDNUM'){
        return {
            ...state,
            num: state.num +action.value
        }
    }
        
    return state;
}
//store
const store = redux.createStore(rootReducer);
console.log(store.getState());

//dispqatching action
store.dispatch({
    type:'INCREMENT'
});
store.dispatch({
    type:'ADDNUM',
    value: 34
});

console.log(store.getState());