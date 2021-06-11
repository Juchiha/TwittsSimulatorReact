import React from 'react';
import { Grid } from '@material-ui/core';
import Tweet from '../Tweet';

import './ListTweets.scss';

export default function ListTweets(props){
    const {allTweet} = props;
    if(!allTweet || allTweet.length == 0){
        return (
            <div className="list-tweets-empty">
                <h2>No existen Tweets!</h2>
            </div>
        );
    }
    return (
        <Grid container spacing={3} className="all-tweets">
            {allTweet.map((tweet, index) => (
                <Grid key={index} item xs={4}>
                    <Tweet tweet={tweet} index = {index}/>
                </Grid>
            ))}
        </Grid>
    );
}