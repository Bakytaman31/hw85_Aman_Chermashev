import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const styles = {
    width: '40%',
    margin: '10px auto'
};



const TrackCard = (props) => {
    let adminInterface = (
        <>
            <Button className="btn btn-danger" onClick={() => props.delete(props.id, props.currentPageId)}>Delete</Button>
            <Button className="btn btn-primary" onClick={() => props.publish(props.id, props.currentPageId)}>Publish</Button>
        </>
    );
    return (
        <div style={styles} onClick={() => props.onClick(props.id)}>
            <Card>
                <CardBody>
                    <CardTitle>{props.number}. {props.name}</CardTitle>
                    <CardText>{props.duration}</CardText>
                </CardBody>
                {props.role === 'admin' && !props.status && adminInterface}
            </Card>
        </div>
    );
};

export default TrackCard;