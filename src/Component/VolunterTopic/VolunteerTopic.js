import React from 'react';
import './VolunteerTopic.css';

const VolunteerTopic = (props) => {
    const {img, title} = props.topic
    // console.log(img)
    return (
        <div>
            <div className="volunteer-container"> 
                <img src={img} alt="Empty!"/>
                <h3>{title}</h3>
            </div>
            
        </div>
    );
};

export default VolunteerTopic;