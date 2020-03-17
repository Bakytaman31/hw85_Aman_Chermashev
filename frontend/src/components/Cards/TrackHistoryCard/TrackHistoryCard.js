import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const styles = {
    width: '40%',
    margin: '10px auto'
};

const TrackHistoryCard = (props) => {
    return (
        <div style={styles}>
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Album: {props.album}</CardSubtitle>
                    <CardText>
                        Date: {props.date}
                        <br/>
                        Artist: {props.artist}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default TrackHistoryCard;