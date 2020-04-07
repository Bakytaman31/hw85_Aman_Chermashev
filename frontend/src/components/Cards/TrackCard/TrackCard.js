import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import {api} from "../../../constants";

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
        <div style={styles}>
            <Card>
                <CardBody>
                    <CardTitle>{props.number}. {props.name}</CardTitle>
                    <CardText>{props.duration}</CardText>
                    <audio src={api + 'uploads/' +props.track} type="audio.mp3" controls onPlay={() => props.onClick(props.id)}>Track</audio>
                </CardBody>
                {props.role === 'admin' && !props.status && adminInterface}
            </Card>
        </div>
    );
};

export default TrackCard;