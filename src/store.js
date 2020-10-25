import { createStore } from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        return { size : 0 };
    }

   
    if(action.type === 'INCREMENT'){
        // 기존의 state 값을 복제하고 변경된 값을 변경한 뒤 return한다
       return {...state, size : state.size + action.size}

    }

    return state;
    
    
},   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())