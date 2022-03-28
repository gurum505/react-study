import React ,{useState}from 'react';

function InputSample(){
    const [text,setText]=useState('')

    //onChange를 사용하면 e를 객체로 받아올수 있다. 
    //이 객체의 e.target은 이벤트가 발생한 DOM
    //e.target.value는 input의 value
    const onChange =(e)=>{ 
        setText(e.target.value); 
    };
    const onReset=()=>{
        setText('');
    };
    return(
        <div>
            <input onChange={onChange} value={text}/>
            {/*초기값value={...}, change가 발생할때마다 onchange함수실행(렌더링발생), 그후 업데이트된text값이 다시 value에*/}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}
export default InputSample;