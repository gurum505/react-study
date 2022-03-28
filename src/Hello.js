import React from "react";

function Hello(props){//props를 통해 App.js가 전달한 name변수를 쓸수 있게된다.
    return(
        <div style={{color:props.color}}>
            {props.isSpecial ? <b>*</b>:null}
            Hello! I'm {props.name}
            
        </div>    
    )
}
Hello.defaultProps={
    name:"noname"
}
export default Hello;
//Hello 라는 React component(UI조각)를 다른데서 쓸수 있도록 하는것

/* JSX RULE
<div>hello!</div>
jsx(xml 형태의 코드)==babel(변환)==>javascript

1.self closing <hello />
2.태그는 감싸져있어야 한다. 하다못해 fragment <> </>라도
3.{name}
4.camelcase사용. background-color 가 아니라 backgroundColor 

*/