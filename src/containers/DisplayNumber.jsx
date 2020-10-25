import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

// 첫번째 괄호의 인자로 아무것도 안올 수도 있고, mapReduxStateToReactProps, mapReduxDispatchToReactProps 
// 둘 중 하나 혹은 둘다 올 수 있다.
// 첫번째 괄호의 첫번째 인자는 mapReduxStateToReactProps 역할, 두번째 인자는 mapReduxDispatchToReactProps 역할을 한다

// 함수 이름은 마음대로
// Redux의 store의 값이 변경될때마다 mapReduxStateToReactProps 함수가 호출되도록 약속
// state의 값을 받도록 약속 되있다( 여기서 state는 redux의 store의 state값을 가리킨다)
// 객체로 전달한다
// 객체의 size는 props의 이름과 같다
function mapReduxStateToReactProps(state){
    return { size : state.size }
}



// connect의 두번째 괄호는 wrappping 작업이라고 보면 된다
export default connect(mapReduxStateToReactProps)(DisplayNumber);    


/* import React, { Component } from 'react'
import DisplayNumber from '../components/DisplayNumber';
import store from '../store';

export default class extends Component {
    state = {
        size : store.getState().size
    }
    
    constructor(props){
        super(props);

        // state의 값이 변경되면 subscribe안에 콜백 함수가 실행되고
        // 내용이 setState, state를 바꾸므로 render 함수가 실행된다.
        store.subscribe(()=>{
            const size = store.getState().size;
            this.setState({ size : size });
        })
    }

    render() {
        const { size } = this.state;
        return (
            <DisplayNumber size={ size } unir={this.props.unit}/>
        )
    }
}
*/