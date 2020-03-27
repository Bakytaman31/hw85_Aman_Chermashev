import React from 'react';
import {Button, Card, CardBody, CardText, CardTitle} from 'reactstrap';
import MusicThumbnail from "../../MusicThumbnail/MusicThumbnail";
import {Link} from "react-router-dom";

const styles = {
    width: '40%',
    margin: '10px auto'
};


const AlbumsCard = (props) => {
    let adminInterface = (
        <>
            <Button className="btn btn-danger" onClick={() => props.delete(props.id, props.currentPageId)}>Delete</Button>
            <Button className="btn btn-primary" onClick={() => props.publish(props.id, props.currentPageId)}>Publish</Button>
        </>
    );
    return (
        <div style={styles}>
            <Card>
                <MusicThumbnail image={props.image}/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.year}</CardText>
                    <Link to={`/tracks/${props.id}`}><Button>Tracks</Button></Link>
                </CardBody>
                {props.role === 'admin' && !props.status && adminInterface}
            </Card>
        </div>
    );
};

export default AlbumsCard;