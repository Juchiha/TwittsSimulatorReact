import React, {useState, useEffect} from 'react';
import Header from './components/Header/';
import SendTwitter from './components/SendTwitter';
import ListTweets from './components/ListTweets';
import {Container, Snackbar} from '@material-ui/core';
import {TWEET_STORAGE} from './components/Utils/Constantes';  

function App() {
  const [toastState, setToastState] = useState({
    open:false,
    text:null
  });

  const [allTweet, setAllTweet] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(()=> {
    const allTweetWebStorage = localStorage.getItem(TWEET_STORAGE);
    const allTweetArray = JSON.parse(allTweetWebStorage);
    setAllTweet(allTweetArray); 
    setReloadTweets(false);
  }, [reloadTweets]);

  const delereTweet = index => {
    allTweet.splice(index, 1);
    setAllTweet(allTweet);
    localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweet));
    setReloadTweets(true);
  }
  return (
    <Container className="tweets-simulator" max-width={false}>
      <Header/>
      <SendTwitter setToastState = {setToastState} allTweet = {allTweet} />
      <ListTweets allTweet = {allTweet} delereTweet= {delereTweet} />
      <Snackbar 
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        open={toastState.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastState.text}</span>}
        />
    </Container>
  );
}

export default App;
