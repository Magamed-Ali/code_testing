import React from 'react';

type ButtonPropsType ={
    name: string
    addMessage: ()=> void
    title: string
}
function Button(props: ButtonPropsType) {
    const onClickButtonHandler = ()=>{
        props.addMessage()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
}

export default Button;