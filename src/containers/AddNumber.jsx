import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';



// connect의 첫번째 괄호의 두번째 인자로 오는 함수에는 strore.dispatch api를 제공해준다
// store를 import 하지 않고 dispatch를 사용할 수 있다
function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick : function(size){
            dispatch({type:'INCREMENT', size: size})
        }
    };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber)


/*
// AddNumber를 wrapping 함으로써
// components에 있는 AddNumber가 redux에 종속 되지 않고 화면에 무언가를 표시해주는
// 역할을 하는 presentation component로 다시 돌아가게 되었다
// 즉 부품으로써 가치있는 component로 다시 되돌려 놓았다

import AddNumber from '../components/AddNumber';
import  React, { Component } from 'react';
import store from '../store';

export default class extends Component {
    dispatch = (size) => {
        store.dispatch({type:'INCREMENT', size: size})
    }
    render() {
        return (
           <AddNumber onClick={this.dispatch}/>
        )
    }
}
*/