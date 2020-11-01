import react from "react";

const Generals = ()=>{
    const [counter,setCounter] = useState(0);

    const clickAble = ()=>{
        setCounter(counter+1)
    }

    return (
        <React.Fragment>
            <button onClick={()=>clickAble()}>click!</button>
            <div>{counter}</div>
        </React.Fragment>    
    )
}

export default Generals;