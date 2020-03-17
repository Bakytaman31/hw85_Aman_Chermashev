import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const styles = {
    width: '40%',
    margin: '10px auto'
};

const TrackCard = (props) => {
    return (
        <div style={styles} onClick={() => props.onClick(props.id)}>
            <Card>
                <CardBody>
                    <CardTitle>{props.number}. {props.name}</CardTitle>
                    <CardText>{props.duration}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default TrackCard;