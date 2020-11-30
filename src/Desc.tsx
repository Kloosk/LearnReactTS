import React from 'react';

interface Props {
    text: string;
    num: number;
}

const Desc: React.FC<Props> = ({text,num}) => {
    return(
        <>
            {Array(num).fill(<p>Description of my great TS app</p>)}
        </>
    );
};

export default Desc;