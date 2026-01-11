const redux= require('redux');

//init ial state
const initialState ={
    num:0
}

//reducer
const rootReducer=(state= initialState,action) => {
    return state;
}
const store = redux.createStore(rootReducer);
console.log(store.getState());
