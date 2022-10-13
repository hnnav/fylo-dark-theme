import React from 'react'

function Testimonial(props){
    return(
            <div class='testimonials'>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <img src={props.profileImgUrl} alt='img' />
                <div class='person'>
                    <h4>{props.name}</h4>
                    <p2>Founder & CEO, Huddle</p2>
                </div>
            </div>
    );
}
export default Testimonial;