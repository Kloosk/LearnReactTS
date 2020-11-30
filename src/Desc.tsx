import React, {useState} from 'react';

interface Props {
    text: string;
    num: number;
}

const Desc: React.FC<Props> = ({text,num}) => {
    return(
        <>
            {Array(num).fill(<p>{text}</p>)}
        </>
    );
};

export default Desc;