import React, {useState, useEffect} from 'react';
import VolunteerTopic from '../VolunterTopic/VolunteerTopic';
import './Home.css';

const Home = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/topicdata`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTopics(data)
            })
    }, [])
    return (
        <div>
            <h1>home section</h1>
            <div>
                <h3>Help people And learn people</h3>
                <input type="text" placeholder="type help media" />
            </div>
            <div className="All-picture">
                {topics.map(topic => <VolunteerTopic
                key={topic._id}
                topic={topic}
                ></VolunteerTopic>)}
            </div>
        </div>
    );
};

export default Home;