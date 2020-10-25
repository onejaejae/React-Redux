import React, { Component } from 'react'
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
            <DisplayNumber size={ size }/>
        )
    }
}
