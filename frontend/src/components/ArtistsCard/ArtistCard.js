import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import MusicThumbnail from "../MusicThumbnail/MusicThumbnail";
import {Link} from "react-router-dom";


const ArtistCard = (props) => {
    return (
        <div>
            <Card>
                <MusicThumbnail image={props.image}/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Link to={`/albums/${props.id}`}><Button>Albums</Button></Link>
                </CardBody>
            </Card>
        </div>
    );
};

export default ArtistCard;