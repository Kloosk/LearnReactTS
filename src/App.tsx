import React, {useState} from 'react';
import Title from "./Title";
import Desc from "./Desc";
import Button from "./Button";

const App: React.FC = () => {
    const [numOfDesc,setNumOfDesc] = useState<number>(1);
  return (
   <div>
     <Title text={"Title"}/>
     <Button func={setNumOfDesc}/>
     <Desc text={"Description"} num={numOfDesc}/>
   </div>
  );
};

export default App;
