import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';
import moment from 'moment';

import './Tweet.scss';

export default function Tweet(props){
    const {tweet: { txtname, txtTweet, time }, index, delereTweet} = props;

    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet_header">
                    <h5>{txtname}</h5>
                    <DeleteTwoTone onClick={() => delereTweet(index) } />
                </div>
                <p>{txtTweet}</p>
                <div className="tweet_date-add-tweet">
                    {moment(time).format('DD/MM/YYYY HH:mm')}
                </div>
            </CardContent>
        </Card>
    );
}