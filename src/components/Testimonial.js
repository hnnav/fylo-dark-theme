import React from 'react'

function Testimonial(props){
    return(
            <div className='testimonial'>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <img src={props.profileImgUrl} alt='img' />
                <div className='person'>
                    <h4>{props.name}</h4>
                    <small>Founder & CEO, Huddle</small>
                </div>
            </div>
    );
}
export default Testimonial;