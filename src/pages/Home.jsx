import { useState } from "react";

const Home = () =>{

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue);
    const inputOnChange = (ev) =>{
        setInputValue(ev.target.value);
    };

    return (
        <div>
            
            <p>{inputValue}</p>
            <button type="button" onClick={()=>{
                setInputValue("Aishwary");
            }}>Update input Value</button>
            <input type="text" 
            value={inputValue} onChange= {inputOnChange}/>
        </div>
    );
};

export default Home;