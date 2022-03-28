import React from 'react';

function Wrapper({children}){//props.children이고, {}안에씀, 예약어(정해져있는거)
    const style={
        border:'2px solid black',
        padding:'16px'
    };
    return(
        <div style={style}>
            {children}
        </div>
    )
}
export default Wrapper;