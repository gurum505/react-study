//클래스형 Counter.js
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        //props를 받아옴,component생성시 가장먼저 실행
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.state={
            counter:0,
            fixed:1
        };
    }

    /* constructor없이 state정의할때,
     * state={
        counter:0
        };
     */
    

    handleIncrease(){
        console.log(this)
        //bind 작업 없이는 this가 undefined라고 뜬다. button event로 설정하는 중 관계가 끊기기 때문
        //1.constructor에서 bind를 해준다.
        this.setState({counter:this.state.counter+1});
        this.setState({counter:this.state.counter+1},()=>{
            console.log("counter가 변경된뒤 함수를 실행하고 싶을때")
        });
        //같은 setState를 두번 쓴다고 +2가 되지는 않는다. 한번에 모아서 처리하기때문(상태를 변경해달라고 요청하는 함수)
        this.setState(state=>({counter:state.counter+1}));
        this.setState(state=>({counter:state.counter+1}));
        //함수형 업데이트를 이용하면 +2가 된다. 최신값으로 유지되기 때문.그때그때
    }//이름은 보통 handle... but 규칙아님!

    handleDecrease=()=>{
        //2. 화살표함수로 구현, 정식 JS문법이 아니라 CRA(create-react-app)로 만든 프로젝트에 적용
        console.log('decrease')
        this.setState(this.state.counter-1);
    }

    /**
    //생성시
    //constructor

    //getDerivedStateFromProps:props 로 받아온 것을 state 에 넣어주고 싶을 때 사용
    //첫 렌더링이전, 이후 리렌더링될때도 호출됨

    //componentDidMount
    //첫번쨰 렌더링 이후 호출(화면에 컴포넌트가 화면에 나타난상태에서 호출)
    //보통 컴포넌트에서 필요한 데이터호출 등
     * 
     */


    /**
     *  업데이트
        이번에는 컴포넌트가 업데이트 되는 시점에 어떤 생명주기 메서드들이 호출되는지 알아봅시다.

        getDerivedStateFromProps
        shouldComponentUpdate
        //컴포넌트를 리렌더링할지 말지 결정하는 함수 
        render
        getSnapshotBeforeUpdate
        //getSnapshotBeforeUpdate 는 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서
        //특정 값을 반환하면 그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용을 할 수 있습니다.
        componentDidUpdate
        //componentDidUpdate 는 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는
        //메서드입니다. 3번째 파라미터로 getSnapshotBeforeUpdate 에서 반환한 값을 조회 할 수 있습니다.
     */

    /*언마운트
     * componentWillUnmount
     * //컴포넌트가 사라지기전에 호출
     */


    render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={()=>this.handleIncrease}>-1</button>
        {/*3.Click내에서 함수새로 선언. 그러나 렌더링될때마다 새로 함수가 생성되므로 최적화할때 까다롭다. */}
      </div>
    );
  }
}

export default Counter;