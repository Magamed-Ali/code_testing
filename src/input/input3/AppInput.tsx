import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

function AppInput() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('');



    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} addMessage={callBackButtonHandler} title={title}/>
            {
                message.map(el => {
                    return(
                        <div>{el.message}</div>
                    )
                })
            }
        </div>
    );
}

export default AppInput;