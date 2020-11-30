import React from 'react';

interface TitleProps {
    text: string;
}

const Title: React.FC <TitleProps> = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default Title;


