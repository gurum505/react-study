import React,{useEffect, useContext } from "react";
import { UserDispatch } from './App';

//React.memo User를 memo로 감싸거나(js내부) export 에 memo사용(다른 .js)
const User= React.memo(function User({user}){
    useEffect(()=>{
        console.log("set user log");
        console.log(user)
        return ()=>{
            console.log("before change")
            console.log(user)
        };
    },[user]);
    //useeffect(함수,[])이면, 처음나타날때만 함수적용
    //useeffect(함수,[user])이면, 처음나타날때, user가 바뀔때 호출 그리고!
    //unmount시에도 호출( 값이 바뀌기전에 )return실행
    //return은 cleanup함수, useeffect(함수,[])이면 사라질때호출됨
    /*
     * 주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.
        1.props 로 받은 값을 컴포넌트의 로컬 상태로 설정
        2.외부 API 요청 (REST API 등)
        3.라이브러리 사용 (D3, Video.js 등...)
        4.setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
        그리고 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.
        1.setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
        2.라이브러리 인스턴스 제거
     */

    const dispatch=useContext(UserDispatch);
    //useContext hook을 이용해 UserDispatch를 조작할수 있게된다.
    return( 
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black' //함수쓸수 있구나
                }}
            onClick={() => {dispatch({
                type:'TOGGLE_USER', id:user.id
            })}}
            >
                {user.username}
            
            </b>
            &nbsp;{/*공백채우는 문자 nonbreaking space */}
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            {/*input에서 onClick의 event 객체의 경우 위와 같이 변수로 전달해줄 필요 없다*/}
        </div>
    )
    /*
    onClick={someFunction()} 을 해버리면 해당 콤포넌트가 렌더링이 되는것과 동시에 someFunction함수를 실행시켜버립니다.
    그래서 보통 onClick={someFunction} 으로 지정해서 () 를 제외하는 방법으로 함수가 즉시실행 되지 않게 하고, 클릭했을때 실행이 되도록 해주죠
    onClick = { onRemove(user.id) } 를 해버리면, 해당 콤포넌트가 렌더링됨가 동시에 이 함수 실행이 되어버려서 아마 아무것도 렌더링이 되어버리지 않을거에요.
    따라서 이런 문제들을 해결하기 위해 onClick에 콜백 함수를 넣어주고, 해당 함수가 실행될 때 user.id를 건네주어 실행시키는 방법으로 처리를 하는거에요
    https://react.vlpt.us/basic/14-array-remove.html
    */

});


function UserList({ users}){
    
    return(
        <div>
            {/**
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
             */}            
            {/**
             * 위의 주석처리된 고정배열을 아래의 remove함수와 같이 쓰면 오류가난다.
             * 왜그럴까? remove는 선택된 항목의 id를 갖고 와서 삭제한다.
             * 그런데 위의 고정배열참조는 없는 users[2]를 참조해서 오류가 난다.
             * users[1]은 remove함수를 1번만 썼을때는 문제가 없다
             */}
            

            {/*배열이 고정적이라면 그냥, 유동적이라면 map =>배열을 렌더링 key필요*/}
            {/*arr.map(i => ) 의 형태로 하위 컴포넌트에게 값을 전달해준다. */}
            {users.map(user=>( //users의 원소 user를 할당(mapping)
                <User user={user} key={user.id}/>
            ))}


            {/*
             {users.map((user,index)=>( //key가 존재x, index사용
                <User user={user} key={index}/>
            ))}

             */}
            

        </div>
    )
}
export default React.memo(UserList);