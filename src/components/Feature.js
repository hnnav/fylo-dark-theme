import React from 'react'

function Feature(props){
    return(
            <div class='feature'>
                <img src={props.imgUrl} alt='img' />
                <h2>{props.header}</h2>
                <p>{props.text}</p>
            </div>
    );
}
export default Feature;