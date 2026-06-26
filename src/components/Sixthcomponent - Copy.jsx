import { useState } from "react"

const Sixthcomponent = () =>{

    const[weight, setWeight] = useState(50);

    return(
     <div className="Sixthcomponent">

        <h1>This is my sixth component</h1>

        <h2>The current weight is: {weight}</h2>

        <button onClick={() => setWeight(55)}>Click to update the weight</button>
     </div>
    )
}

export default Sixthcomponent;