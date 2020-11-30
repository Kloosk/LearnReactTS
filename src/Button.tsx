//rrc
import React, {Dispatch, SetStateAction} from 'react';

interface Props {
    func: Dispatch<SetStateAction<number>>
}

const Button: React.FC<Props> = ({func}) => {
    return (
        <button onClick={() => func(prevState => prevState + 1)}>Click to add desc</button>
    );
};

export default Button;