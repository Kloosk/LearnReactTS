import React, {useRef} from 'react';

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const InputAge: React.FC<Props> = ({handleChange}) => {
const inputRef = useRef<HTMLInputElement>(null);
return (
    <div>
        <input ref={inputRef} type="text" onChange={handleChange} onClick={() => {console.log(inputRef.current)}}/>
    </div>
);
};

export default InputAge;