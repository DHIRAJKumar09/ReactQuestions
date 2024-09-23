import React from 'react';
import CardComponent from './CardComponent';

const ResuableComponents = () => {

    const CardComponent = ({ image, description, link, buttonText }) => {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        );
    };

    
    return (
        <div>
            <CardComponent 
                image="https://via.placeholder.com/150"
                description="This is a sample description."
                link="https://example.com"
                buttonText="Learn More"
            />
            <CardComponent 
                image="https://via.placeholder.com/150"
                description="Another example card with different content."
                link="https://google.com"
                buttonText="Visit Google"
            />
        </div>
    );
};

export default App;
