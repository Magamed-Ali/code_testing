import React, {useState} from 'react';

function Input() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }


    return (
        <div>
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

export default Input;