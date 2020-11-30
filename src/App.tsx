import React, {useState} from 'react';
import Title from "./Title";
import Desc from "./Desc";
import Button from "./Button";
import InputAge from "./InputAge";

const App: React.FC = () => {
    const [numOfDesc,setNumOfDesc] = useState<number>(1);
  return (
   <div>
       <InputAge handleChange={(event => {
           console.log(event.target.value);
       })}/>
     <Title text={"Title"}/>
     <Button func={setNumOfDesc}/>
     <Desc text={"Description"} num={numOfDesc}/>
   </div>
  );
};

export default App;
