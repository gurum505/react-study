//클래스형 hello.js

import React,{Component} from 'react';

class Hello extends Component{
    /** defaultProps를 안에 선언하는 경우
     * static defaultProps{
     * name:'noname
     * };
     * 
     */
    render(){
        const {color,name,isSpecial}=this.props;
        return(
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                hi, i'm {name}
            </div>
        )
    }
}
Hello.defaultProps={
    name:'noname'
};

export default Hello;