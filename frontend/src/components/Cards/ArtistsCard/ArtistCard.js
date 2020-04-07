import React from 'react';
import {Button, Card, CardBody, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";

import MusicThumbnail from "../../MusicThumbnail/MusicThumbnail";
import './ArtistCard.css';


const ArtistCard = (props) => {
    const adminInterface = (
        <>
            <Button className="btn btn-danger" onClick={() => props.delete(props.id)}>Delete</Button>
            <Button className="btn btn-primary" onClick={() => props.publish(props.id)}>Publish</Button>
        </>
    );
    return (
        <div className="ArtistCard">
            <Card>
                <MusicThumbnail image={props.image}/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <Link to={`/albums/${props.id}`}><Button>Albums</Button></Link>
                    <p/>
                    <Link to={`artist/${props.id}`}><Button>More about artist</Button></Link>
                </CardBody>
                {props.role === 'admin' && !props.status && adminInterface}
            </Card>
        </div>
    );
};

export default ArtistCard;