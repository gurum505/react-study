import React ,{useState,useRef}from 'react';

function InputSample2(){
    const [inputs,setInputs]=useState({//항상최신상태로 렌더링되어야하는것들
        name:'',
        nickname:''
    });
    const nameInput=useRef(); 
    //ref객체를 만들고 이 객체를 우리가 포커스를 맞추고 싶은 DOM에 ref값으로 주면됌
    //특정DOM 을 선택하는 getElementById, querySelector
    //외부라이브러리 쓸때 사용
    const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출
    const onChange =(e)=>{ 
        const{value,name}=e.target;//e.target에서 value와 name값을 추출 여기선 {name},"name" / {nickname},"nickname"
        console.log(e.target);
        setInputs({
            ...inputs, //기존 input 객체를 복사
            [name]:value //name키를 가진 값("nickname","name")을 value로 복사
        })
    };
    const onReset=()=>{
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus();
    };
    return(
        <div>
            <input name="name"
             placeholder='이름' 
             onChange={onChange}
             value={name}
             ref={nameInput}/>
            <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    )
}
export default InputSample2;