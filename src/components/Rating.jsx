import React, { Fragment } from 'react';
import {RiStarSFill} from 'react-icons/ri';
function Rating(props) {
    const c='s';
    function getStars(n){
        let stars =[];
        for (let index = 0; index < n; index++) {
            stars.push(<RiStarSFill/>);
            
        }
        return <Fragment>{stars}</Fragment>
    }
    return ( 
        <Fragment>{getStars(props.rating)}</Fragment>
    );
}

export default Rating;