import React , {useState} from 'react';
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';
import {TWEET_STORAGE} from '../Utils/Constantes';  
import "./SendTwitter.scss";

export default function SendTwitter(props){
    const {setToastState, allTweet } = props;
    const [isOpenModal, setIsOpenModal] =  useState(false);   

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const SendTweet = (event, formValue) => {
       event.preventDefault();
       const { txtname, txtTweet } = formValue;
       let allTweetsArray = [];
       if(allTweet){
           allTweetsArray = allTweet;
       }
       if(!txtname || !txtTweet){
            setToastState({
               open : true,
               text : "Warning, todos los campos son obligatorios"
            });
       }else{
            formValue.time = moment();
            allTweetsArray.push(formValue);
            //let json = localStorage.getItem(TWEET_STORAGE);
            localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweetsArray));
            setToastState({
                open : true,
                text : "Tweet enviado exitosamente!"
            });
            closeModal();
            allTweetsArray = [];
        }
    }


    return (
        <div className="sendTwitt">
            <Fab 
                className="sendTwitt_open_modal"
                color="primary"
                aria-label="add"
                onClick = {openModal}
            >
                <AddIcon/>
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} CloseModal = {closeModal}>
                <FormSendTweet sendTweet = {SendTweet} />
            </ModalContainer>
        </div>
    );
}