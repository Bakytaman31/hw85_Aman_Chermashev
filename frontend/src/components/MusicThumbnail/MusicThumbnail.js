import React from 'react';

import imageNotAvailable from '../../assets/images/image_not_available.png';
import {api} from "../../constants";


const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
};

const MusicThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = api + 'uploads/' + props.image;
    }

    return <img alt="Artist" src={image} style={styles} className="img-thumbnail" />;
};

export default MusicThumbnail;