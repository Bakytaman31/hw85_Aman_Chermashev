import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const TrackCard = (props) => {
    return (
        <div>
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