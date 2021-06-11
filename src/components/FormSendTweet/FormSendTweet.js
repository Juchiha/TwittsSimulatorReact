import React, {useState} from 'react';
import { FormControl, FormGroup, TextField, Button} from '@material-ui/core';

import './FormSendTweet.scss';


export default function FormSendTweet(props){
    const {sendTweet} = props;
    const [formValue, setFormValue] = useState({
        txtname:"",
        txtTweet:""
    });

    const onFormChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]:event.target.value
        });
    }
    return (
        <div className="FormSendTweet">
            <h2 className="FormSendTweet_title">Enviar Tweet</h2>
            <form className="FormSendTweet_form" onSubmit={(event) => sendTweet(event, formValue)} onChange={onFormChange}>
                <FormControl>
                    <FormGroup>
                        <TextField className="FormSendTweet_form-name"
                        type="text"
                        name="txtname"
                        placeholder="Nombre de usuario"
                        margin="normal"/>
                    </FormGroup>

                    <FormGroup>
                        <TextField className="FormSendTweet_form-text-area"
                        multiline
                        rows="6"
                        name="txtTweet"
                        placeholder="Escribe tu Tweet"
                        margin="normal"/>
                    </FormGroup>

                    <FormGroup>
                        <Button
                        type="submit" >Enviar Tweet</Button>
                    </FormGroup>

                </FormControl>
            </form>
        </div>
    );
}