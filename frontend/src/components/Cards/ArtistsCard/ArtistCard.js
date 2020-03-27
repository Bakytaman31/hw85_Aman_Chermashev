import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import MusicThumbnail from "../../MusicThumbnail/MusicThumbnail";
import {Link} from "react-router-dom";

const styles = {
    width: '40%',
    margin: '10px auto'
};



const ArtistCard = (props) => {
    const adminInterface = (
        <>
            <Button className="btn btn-danger" onClick={() => props.delete(props.id)}>Delete</Button>
            <Button className="btn btn-primary" onClick={() => props.publish(props.id)}>Publish</Button>
        </>
    );
    return (
        <div style={styles}>
            <Card>
                <MusicThumbnail image={props.image}/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Link to={`/albums/${props.id}`}><Button>Albums</Button></Link>
                </CardBody>
                {props.role === 'admin' && !props.status && adminInterface}
            </Card>
        </div>
    );
};

export default ArtistCard;